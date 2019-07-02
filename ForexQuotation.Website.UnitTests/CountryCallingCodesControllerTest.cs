using ForexQuotation.Services.Implementatons;
using ForexQuotation.Services.Interfaces;
using ForexQuotation.Website.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Xunit;

namespace ForexQuotation.Website.UnitTests
{
    public class CountryCallingCodesControllerTest
    {
        CountryCallingCodesController _controller;
        ICountryCallingCodeService _service;

        public CountryCallingCodesControllerTest()
        {
            _service = new CountryCallingCodeServiceFake();
            _controller = new CountryCallingCodesController(_service);
        }

        [Fact]
        public void Get_Returns()
        {
            // Act
            var result = _controller.Get().Result;

            // Assert
            Assert.True(result.Value.Count() == 1);
        }
    }
}
