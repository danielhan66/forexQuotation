using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using ForexQuotation.Data.Model;

namespace ForexQuotation.Data
{
    public class ForexQuotationDBContext : DbContext
    {
        public ForexQuotationDBContext(DbContextOptions<ForexQuotationDBContext> options) : base(options)
        {
        }

        public DbSet<Quotation> Quotations { get; set; }
        public DbSet<Currency> Currencies { get; set; }
        public DbSet<CountryCallingCode> CountryCallingCodes { get; set; }
    }
}
