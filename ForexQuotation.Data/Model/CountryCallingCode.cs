using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace ForexQuotation.Data.Model
{
    public class CountryCallingCode
    {
        [Key]
        public string Code { get; set; }
    }
}
