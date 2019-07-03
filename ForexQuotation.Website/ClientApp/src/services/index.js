export const api = {
  fetchQuotations: () => {
    const url = 'api/quotations';

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