using ForexQuotation.Services.Dtos;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ForexQuotation.Services.Interfaces
{
    public interface IQuotationService
    {
        Task<QuotationDto> GenerateQuotation(QuotationDto quotationRequest);
        Task<List<QuotationDto>> GetQuotations();
        Task<Boolean> SaveQuotation(QuotationDto quotationDto);
    }
}
