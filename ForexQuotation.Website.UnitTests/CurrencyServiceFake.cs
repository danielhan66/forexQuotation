using ForexQuotation.Data.Model;
using ForexQuotation.Services.Dtos;
using ForexQuotation.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ForexQuotation.Website.UnitTests
{
    public class CurrencyServiceFake : ICurrencyService
    {
        public async Task<List<CurrencyDto>> GetCurrencies()
        {
            await Task.Delay(1000);

            return new List<CurrencyDto>{
                    new CurrencyDto{
                        Code = "AUD",
                        Name = "Australian Dollar (AUD)"
                    },
                    new CurrencyDto{
                        Code = "USD",
                        Name = "United States Dollar (USD)"
                    },
                };
        }

        public Task<Currency> GetCurrencyByCode(string code)
        {
            throw new NotImplementedException();
        }
    }
}
