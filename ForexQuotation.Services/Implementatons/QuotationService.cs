using ForexQuotation.Data;
using ForexQuotation.Data.Model;
using ForexQuotation.Proxies.OFX;
using ForexQuotation.Services.Dtos;
using ForexQuotation.Services.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ForexQuotation.Services.Implementatons
{
    public class QuotationService : IQuotationService
    {
        private readonly ForexQuotationDBContext _dbContext;
        private readonly ICurrencyService _currencyService;
        private readonly IOFXAPIProxy _ofxAPIProxy;

        public QuotationService(ForexQuotationDBContext dbContext, ICurrencyService currencyService, IOFXAPIProxy ofxAPIProxy)
        {
            _dbContext = dbContext;
            _currencyService = currencyService;
            _ofxAPIProxy = ofxAPIProxy;
        }

        public async Task<QuotationDto> GenerateQuotation(QuotationDto quotationRequest)
        {
            //todo input validation
            var apiRequest = new GetQuotatonRequest
            {
                FromCurrencyCode = quotationRequest.FromCurrencyCode,
                ToCurrencyCode = quotationRequest.ToCurrencyCode,
                Amount = quotationRequest.Amount
            };
            var apiResponse = await _ofxAPIProxy.GetQuotation(apiRequest);

            if(apiResponse == null)
            {
                throw new Exception("Failed to get a quotation");
            }

            var quotationResponse = quotationRequest;
            quotationResponse.OFXCustomerRate = apiResponse.CustomerRate;
            quotationResponse.OFXCustomerAmount = apiResponse.CustomerAmount;

            if(await this.SaveQuotation(quotationResponse))
            {
                return quotationResponse;
            }

            throw new Exception("Failed to save the quotation");
        }

        public async Task<List<QuotationDto>> GetQuotations()
        {
            return await _dbContext.Quotations.Select(q => new QuotationDto
            {
                Id = q.Id,
                FirstName = q.FirstName,
                LastName = q.LastName,
                Email = q.Email,
                Phone = q.Phone,
                FromCurrencyCode = q.FromCurrency.Code,
                ToCurrencyCode = q.ToCurrency.Code,
                Amount = q.Amount,
                OFXCustomerRate = q.OFXCustomerRate,
                CreatedDate = q.CreatedDate
            }).ToListAsync();
        }

        public async Task<Boolean> SaveQuotation(QuotationDto quotationDto)
        {
            // At the moment, just implement "create"
            if (quotationDto.Id != 0)
            {
                throw new Exception($"Invalid quotationDto id {quotationDto.Id}");
            }

            var fromCurrency = await _currencyService.GetCurrencyByCode(quotationDto.FromCurrencyCode);

            if(fromCurrency == null)
            {
                throw new Exception($"Invalid fromCurrency code {quotationDto.FromCurrencyCode}");
            }

            var toCurrency = await _currencyService.GetCurrencyByCode(quotationDto.ToCurrencyCode);
            if (toCurrency == null)
            {
                throw new Exception($"Invalid ToCurrency code {quotationDto.ToCurrencyCode}");
            }

            var quotation = new Quotation
            {
                FirstName = quotationDto.FirstName,
                LastName = quotationDto.LastName,
                Email = quotationDto.Email,
                Phone = quotationDto.Phone,
                FromCurrency = fromCurrency,
                ToCurrency = toCurrency,
                Amount = quotationDto.Amount,
                OFXCustomerRate = quotationDto.OFXCustomerRate,
                CreatedDate = DateTime.Now
            };
            await _dbContext.Quotations.AddAsync(quotation);

            return await _dbContext.SaveChangesAsync() > 0;
        }
    }
}
