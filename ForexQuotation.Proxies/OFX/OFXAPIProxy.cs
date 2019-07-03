using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace ForexQuotation.Proxies.OFX
{
    public interface IOFXAPIProxy
    {
        Task<GetQuotationResponse> GetQuotation(GetQuotatonRequest request);
    }
    public class OFXAPIProxy : IOFXAPIProxy
    {
        private readonly OFXAPISettings _ofxAPISettings;
        public OFXAPIProxy(IOptions<OFXAPISettings> ofxAPISettings)
        {
            _ofxAPISettings = ofxAPISettings.Value;
        }
        public async Task<GetQuotationResponse> GetQuotation(GetQuotatonRequest request)
        {
            var apiUrl = $"{_ofxAPISettings.OFXAPIEndpoint}/spotrate/Individual/{request.FromCurrencyCode}/{request.ToCurrencyCode}/{request.Amount}?format=json";

            HttpClient client = new HttpClient();
            client.DefaultRequestHeaders.Accept.Add(
                new MediaTypeWithQualityHeaderValue("application/json"));            
            var stringTask = client.GetStringAsync(apiUrl);

            var response = JsonConvert.DeserializeObject<GetQuotationResponse>(await stringTask);

            return response;
        }
    }
}
