using ForexQuotation.Data.Model;
using ForexQuotation.Services.Dtos;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ForexQuotation.Services.Interfaces
{
    public interface ICurrencyService
    {
        Task<List<CurrencyDto>> GetCurrencies();
        Task<Currency> GetCurrencyByCode(string code);
    }
}
