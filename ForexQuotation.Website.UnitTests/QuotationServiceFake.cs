using ForexQuotation.Services.Dtos;
using ForexQuotation.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ForexQuotation.Website.UnitTests
{
    public class QuotationServiceFake : IQuotationService
    {
        public async Task<QuotationDto> GenerateQuotation(QuotationDto quotationRequest)
        {
            await Task.Delay(1000);

            var quotationResponse = quotationRequest;
            quotationResponse.OFXCustomerRate = 0.6M;
            quotationResponse.OFXCustomerAmount = quotationRequest.Amount * quotationResponse.OFXCustomerRate;

            return quotationResponse;
        }

        public async Task<List<QuotationDto>> GetQuotations()
        {
            await Task.Delay(1000);

            return new List<QuotationDto>{
                    new QuotationDto{
                        Id = 2
                    },
                    new QuotationDto{
                        Id = 3
                    },
                };
        }

        public async Task<bool> SaveQuotation(QuotationDto quotationDto)
        {
            await Task.Delay(1000);

            return true;
        }
    }
}
