import { take, put, call, fork, select, takeEvery, takeLatest, all } from 'redux-saga/effects'
import { api } from '../services'
import * as actions from '../actions'

export function* createQuotation(quotation){
  try {
    const response = yield call(api.createQuotation, quotation);
    yield put(actions.createQuotationSuccess(response));
  }catch(error){
    yield put(actions.createQuotationFailure(error))
  }
}

export function* fetchQuotations(){
  try {
    const quotations = yield call(api.fetchQuotations);
    yield put(actions.fetchQuotationsSuccess(quotations));
  }catch(error){
    yield put(actions.fetchQuotationsFailure(error))
  }
}

export function* fetchCurrencies(){
  try {
    const currencies = yield call(api.fetchCurrencies);
    yield put(actions.fetchCurrenciesSuccess(currencies));
  }catch(error){
    yield put(actions.fetchCurrenciesFailure(error))
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.CREATE_QUOTATION_REQUEST, (action) => createQuotation(action.quotation)),
    takeLatest(actions.FETCH_QUOTATIONS_REQUEST, fetchQuotations),
    takeLatest(actions.FETCH_CURRENCIES_REQUEST, fetchCurrencies)
  ])
}