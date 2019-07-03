using System;
using System.Collections.Generic;
using System.Text;

namespace ForexQuotation.Proxies.OFX
{
    public class GetQuotatonRequest
    {
        public string FromCurrencyCode { get; set; }
        public string ToCurrencyCode { get; set; }
        public decimal Amount { get; set; }
    }
}
