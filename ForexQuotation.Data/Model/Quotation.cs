using System;
using System.Collections.Generic;
using System.Text;

namespace ForexQuotation.Data.Model
{
    public class Quotation
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public Currency FromCurrency { get; set; }
        public Currency ToCurrency { get; set; }
        public Decimal Amount { get; set; }
        public Decimal OFXCustomerRate { get; set; }
        public Decimal OFXCustomerAmount { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
