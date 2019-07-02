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
    public class CountryCallingCodesController : ControllerBase
    {
        private ICountryCallingCodeService _countryCallingCodeService;
        public CountryCallingCodesController(ICountryCallingCodeService countryCallingCodeService)
        {
            _countryCallingCodeService = countryCallingCodeService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<CountryCallingCodeDto>>> Get()
        {
            return await _countryCallingCodeService.GetCountryCallingCodes();
        }
    }
}
