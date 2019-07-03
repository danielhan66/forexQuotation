export const api = {
  createQuotation: (quotation) => {
    const url = 'api/quotations';
    console.log(quotation);
    return fetch(
      url,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(quotation)
      }
    )
    .then(statusHelper)
    .then(response => response.json())
    .catch(error => error)
    .then(data => {
         return data
     });
  },
  fetchQuotations: () => {
    const url = 'api/quotations';

    return fetch(url)
    .then(statusHelper)
    .then(response => response.json())
    .catch(error => error)
    .then(data => {
         return data
     })
  },
  fetchCurrencies: () => {
    const url = 'api/currencies';

    return fetch(url)
    .then(statusHelper)
    .then(response => response.json())
    .catch(error => error)
    .then(data => {
         return data
     })
  }
};

function statusHelper (response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}