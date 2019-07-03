using ForexQuotation.Data;
using ForexQuotation.Proxies.OFX;
using ForexQuotation.Services.Implementatons;
using ForexQuotation.Services.Interfaces;
using ForexQuotation.Website.Extensions;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;

namespace ForexQuotation
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<ForexQuotationDBContext>(options => options.UseSqlServer(Configuration.GetConnectionString("ForexQuotationDBConnection")));
            services.AddTransient(typeof(ICurrencyService), typeof(CurrencyService));
            services.AddTransient(typeof(ICountryCallingCodeService), typeof(CountryCallingCodeService));
            services.AddTransient(typeof(IQuotationService), typeof(QuotationService));
            services.AddTransient(typeof(IOFXAPIProxy), typeof(OFXAPIProxy));
            services.Configure<OFXAPISettings>(Configuration.GetSection("OFXAPISettings"));

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);

            // In production, the React files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/build";
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.ConfigureExceptionHandler();

            // app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller}/{action=Index}/{id?}");
            });

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseReactDevelopmentServer(npmScript: "start");
                }
            });

            using (var dbContext = new ForexQuotationDBContext(new DbContextOptionsBuilder<ForexQuotationDBContext>().UseSqlServer(Configuration.GetConnectionString("ForexQuotationDBConnection")).Options))
            {
                dbContext.Database.EnsureCreated();

                var countryCallingCode = dbContext.CountryCallingCodes.FirstOrDefaultAsync().Result;
                if(countryCallingCode == null)
                {
                    dbContext.CountryCallingCodes.Add(new Data.Model.CountryCallingCode { Code = "61" });
                }

                var currency = dbContext.Currencies.FirstOrDefaultAsync().Result;
                if(currency == null)
                {
                    dbContext.Currencies.Add(new Data.Model.Currency { Code = "AUD", Name = "Australian Dollar (AUD)" });
                    dbContext.Currencies.Add(new Data.Model.Currency { Code = "USD", Name = "United States Dollar (USD)" });
                }

                var quotation = dbContext.Quotations.FirstOrDefaultAsync().Result;
                if(quotation == null)
                {
                    dbContext.Quotations.Add(new Data.Model.Quotation { FirstName="Tom", LastName="Hanks", Email="tomh@yahoo.com.au", Phone="+61460606060", FromCurrency=new Data.Model.Currency { Code = "AUD"}, ToCurrency=new Data.Model.Currency { Code = "USD"}, Amount=10000, OFXCustomerRate=0.72M, OFXCustomerAmount=7200, CreatedDate=DateTime.Now });
                    dbContext.Quotations.Add(new Data.Model.Quotation { FirstName = "Rowan", LastName = "Atkinson", Email = "rowana@yahoo.com.au", Phone = "+61460606060", FromCurrency = new Data.Model.Currency { Code = "AUD" }, ToCurrency = new Data.Model.Currency { Code = "USD" }, Amount = 20000, OFXCustomerRate = 0.73M, OFXCustomerAmount = 14600, CreatedDate = DateTime.Now });
                }

                dbContext.SaveChanges();
            }
        }
    }
}
