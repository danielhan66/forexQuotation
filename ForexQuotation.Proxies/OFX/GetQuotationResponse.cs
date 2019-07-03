using System;
using System.Collections.Generic;
using System.Text;

namespace ForexQuotation.Proxies.OFX
{
    public class GetQuotationResponse
    {
        public decimal CustomerRate { get; set; }
        public decimal CustomerRateInverse { get; set; }
        public decimal CustomerAmount { get; set; }
        public decimal InterbankAmount { get; set; }
        public decimal DefaultFee { get; set; }
        public decimal Fee { get; set; }
        public decimal FeeFreeThreshold { get; set; }
        public decimal InterbankRate { get; set; }
        public decimal InverseInterbankRate { get; set; }
        public string DeliveryCountry { get; set; }
        public double DeliveryTime { get; set; }
        public decimal ComparisonRate { get; set; }
        public decimal ComparisonAmount { get; set; }
        public string Message { get; set; }
    }
}
