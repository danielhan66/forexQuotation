using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ForexQuotation.Services.Dtos;
using ForexQuotation.Services.Interfaces;
using ForexQuotation.Website.Utilities;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ForexQuotation.Website.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuotationsController : ControllerBase
    {
        private IQuotationService _quotationService;
        public QuotationsController(IQuotationService quotationService)
        {
            _quotationService = quotationService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<QuotationDto>>> Get()
        {
            return await _quotationService.GetQuotations();
        }

        [HttpPost]
        public async Task<ActionResult> GenerateQuotation([FromBody]QuotationDto quotationRequest)
        {
            // We can move the input validation into QuotationService
            // and give more error detail, for example invalid email etc.
            if (quotationRequest == null
                || string.IsNullOrWhiteSpace(quotationRequest.FirstName)
                || string.IsNullOrWhiteSpace(quotationRequest.LastName)
                || string.IsNullOrWhiteSpace(quotationRequest.FromCurrencyCode)
                || string.IsNullOrWhiteSpace(quotationRequest.ToCurrencyCode)
                || quotationRequest.Amount <= 0
                || (!string.IsNullOrWhiteSpace(quotationRequest.Email) && !RegexUtilities.IsValidEmail(quotationRequest.Email)))
            {
                return BadRequest();
            }

            return Ok(await _quotationService.GenerateQuotation(quotationRequest));
        }
    }
}
