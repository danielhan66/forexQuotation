export const CREATE_QUOTATION_REQUEST = 'CREATE_QUOTATION_REQUEST'
export const CREATE_QUOTATION_SUCCESS = 'CREATE_QUOTATION_SUCCESS'
export const CREATE_QUOTATION_FAILURE = 'CREATE_QUOTATION_FAILURE'

export const FETCH_QUOTATIONS_REQUEST = 'FETCH_QUOTATIONS_REQUEST'
export const FETCH_QUOTATIONS_SUCCESS = 'FETCH_QUOTATIONS_SUCCESS'
export const FETCH_QUOTATIONS_FAILURE = 'FETCH_QUOTATIONS_FAILURE'

export const FETCH_CURRENCIES_REQUEST = 'FETCH_CURRENCIES_REQUEST'
export const FETCH_CURRENCIES_SUCCESS = 'FETCH_CURRENCIES_SUCCESS'
export const FETCH_CURRENCIES_FAILURE = 'FETCH_CURRENCIES_FAILURE'

export function createQuotation(quotation){
  return {
    type: CREATE_QUOTATION_REQUEST,
    quotation
  }
}

export function createQuotationSuccess(quotation){
  return {
    type: CREATE_QUOTATION_SUCCESS,
    quotation
  }
}

export function createQuotationFailure(error){
  return {
    type: CREATE_QUOTATION_FAILURE,
    error
  }
}

export function fetchQuotations(){
  return {
    type: FETCH_QUOTATIONS_REQUEST,
  }
}

export function fetchQuotationsSuccess(quotations){
  return {
    type: FETCH_QUOTATIONS_SUCCESS,
    quotations
  }
}

export function fetchQuotationsFailure(error){
  return {
    type: FETCH_QUOTATIONS_FAILURE,
    error,
  }
}

export function fetchCurrencies(){
  return {
    type: FETCH_CURRENCIES_REQUEST,
  }
}

export function fetchCurrenciesSuccess(currencies){
  return {
    type: FETCH_CURRENCIES_SUCCESS,
    currencies
  }
}

export function fetchCurrenciesFailure(error){
  return {
    type: FETCH_CURRENCIES_FAILURE,
    error,
  }
}