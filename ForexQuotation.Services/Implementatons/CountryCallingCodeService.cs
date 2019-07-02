using ForexQuotation.Data;
using ForexQuotation.Services.Dtos;
using ForexQuotation.Services.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ForexQuotation.Services.Implementatons
{
    public class CountryCallingCodeService : ICountryCallingCodeService
    {
        private readonly ForexQuotationDBContext _dbContext;
        public CountryCallingCodeService(ForexQuotationDBContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<List<CountryCallingCodeDto>> GetCountryCallingCodes()
        {
            return await _dbContext.CountryCallingCodes.Select(c => new CountryCallingCodeDto { Code = c.Code }).ToListAsync();
        }
    }
}