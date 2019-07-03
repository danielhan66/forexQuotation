using System;
using System.Collections.Generic;
using System.Text;

namespace ForexQuotation.Services.Dtos
{
    public class QuotationDto
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string FromCurrencyCode { get; set; }
        public string ToCurrencyCode { get; set; }
        // The amount of FromCurrency
        public Decimal Amount { get; set; }
        public Decimal OFXCustomerRate { get; set; }
        // The amount of ToCurrency
        public Decimal OFXCustomerAmount { get; set;}
        public DateTime CreatedDate { get; set; }
    }
}
