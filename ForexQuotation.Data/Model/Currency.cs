using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace ForexQuotation.Data.Model
{
    public class Currency
    {
        [Key]
        public string Code { get; set; }
        public string Name { get; set; }
    }
}
