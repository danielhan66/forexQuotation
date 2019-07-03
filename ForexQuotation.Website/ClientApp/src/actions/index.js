export const FETCH_QUOTATIONS_REQUEST = 'FETCH_QUOTATIONS_REQUEST'
export const FETCH_QUOTATIONS_SUCCESS = 'FETCH_QUOTATIONS_SUCCESS'
export const FETCH_QUOTATIONS_FAILURE = 'FETCH_QUOTATIONS_FAILURE'

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