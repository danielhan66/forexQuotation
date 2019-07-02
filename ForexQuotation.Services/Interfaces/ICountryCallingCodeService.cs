using ForexQuotation.Services.Dtos;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ForexQuotation.Services.Interfaces
{
    public interface ICountryCallingCodeService
    {
        Task<List<CountryCallingCodeDto>> GetCountryCallingCodes();
    }
}
