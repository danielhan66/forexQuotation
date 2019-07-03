using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Xunit;
using ForexQuotation.Website.Controllers;
using ForexQuotation.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace ForexQuotation.Website.UnitTests
{
    public class QuotationsControllerTest
    {
        QuotationsController _controller;
        IQuotationService _service;

        public QuotationsControllerTest()
        {
            _service = new QuotationServiceFake();
            _controller = new QuotationsController(_service);
        }

        [Fact]
        public void GenerateQuotation_InvalidQuotationRequest_ReturnsBadRequest()
        {
            // First verify that the quotationRequest is correct.
            var result = _controller.GenerateQuotation(
                new Services.Dtos.QuotationDto
                {
                    FirstName = "Tom",
                    LastName = "Hanks",
                    Email = "tomh@yahoo.com.au",
                    FromCurrencyCode = "AUD",
                    ToCurrencyCode = "USD",
                    Amount = 10000
                }).Result;

            Assert.IsType<OkObjectResult>(result);

            // Test invalid first name
            result = _controller.GenerateQuotation(
                new Services.Dtos.QuotationDto
                {
                    FirstName = string.Empty,
                    LastName = "Hanks",
                    Email = "tomh@yahoo.com.au",
                    FromCurrencyCode = "AUD",
                    ToCurrencyCode = "USD",
                    Amount = 10000
                }).Result;

            Assert.IsType<BadRequestResult>(result);

            // Test invalid email
            result = _controller.GenerateQuotation(
                new Services.Dtos.QuotationDto
                {
                    FirstName = "Tom",
                    LastName = "Hanks",
                    Email = "123", // invalid email
                    FromCurrencyCode = "AUD",
                    ToCurrencyCode = "USD",
                    Amount = 10000
                }).Result;
            Assert.IsType<BadRequestResult>(result);
        }

        [Fact]
        public void GenerateQuotation_ReturnsOkResult()
        {
            var result = _controller.GenerateQuotation(
                new Services.Dtos.QuotationDto
                {
                    FirstName = "Tom",
                    LastName = "Hanks",
                    Email = "tomh@yahoo.com.au",
                    FromCurrencyCode = "AUD",
                    ToCurrencyCode = "USD",
                    Amount = 10000
                }).Result;

            Assert.IsType<OkObjectResult>(result);
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
