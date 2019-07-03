using ForexQuotation.Data;
using ForexQuotation.Data.Model;
using ForexQuotation.Services.Dtos;
using ForexQuotation.Services.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ForexQuotation.Services.Implementatons
{
    public class CurrencyService : ICurrencyService
    {
        private readonly ForexQuotationDBContext _dbContext;
        public CurrencyService(ForexQuotationDBContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<List<CurrencyDto>> GetCurrencies()
        {
            return await _dbContext.Currencies.Select(c => new CurrencyDto { Code = c.Code, Name = c.Name }).ToListAsync();
        }

        public async Task<Currency> GetCurrencyByCode(string code)
        {
            return await _dbContext.Currencies.FindAsync(code);
        }
    }
}
