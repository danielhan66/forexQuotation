using ForexQuotation.Services.Interfaces;
using ForexQuotation.Website.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Xunit;

namespace ForexQuotation.Website.UnitTests
{
    public class CurrenciesControllerTest
    {
        CurrenciesController _controller;
        ICurrencyService _service;

        public CurrenciesControllerTest()
        {
            _service = new CurrencyServiceFake();
            _controller = new CurrenciesController(_service);
        }

        [Fact]
        public void Get_Returns()
        {
            // Act
            var result = _controller.Get().Result;

            // Assert
            Assert.True(result.Value.Count() == 2);
        }
    }
}
