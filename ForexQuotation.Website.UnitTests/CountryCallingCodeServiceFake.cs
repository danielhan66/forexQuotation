using ForexQuotation.Services.Dtos;
using ForexQuotation.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ForexQuotation.Website.UnitTests
{
    public class CountryCallingCodeServiceFake : ICountryCallingCodeService
    {
        public async Task<List<CountryCallingCodeDto>> GetCountryCallingCodes()
        {
            await Task.Delay(1000);

            return new List<CountryCallingCodeDto>{
                    new CountryCallingCodeDto{
                        Code = "61"
                    }
                };
        }
    }
}
