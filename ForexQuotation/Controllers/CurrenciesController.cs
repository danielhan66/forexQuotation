using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ForexQuotation.Services.Dtos;
using ForexQuotation.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ForexQuotation.Website.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CurrenciesController : ControllerBase
    {
        private ICurrencyService _currencyService;
        public CurrenciesController(ICurrencyService currencyService)
        {
            _currencyService = currencyService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<CurrencyDto>>> Get()
        {
            return await _currencyService.GetCurrencies();
        }
    }
}
