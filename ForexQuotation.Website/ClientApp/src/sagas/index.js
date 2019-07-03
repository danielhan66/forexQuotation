import { take, put, call, fork, select, takeEvery, takeLatest, all } from 'redux-saga/effects'
import { api } from '../services'
import * as actions from '../actions'

export function* fetchQuotations(){
  try {
    console.log("fetchQuotations...");
    const quotations = yield call(api.fetchQuotations);
    console.log(quotations);
    yield put(actions.fetchQuotationsSuccess(quotations));
  }catch(error){
    yield put(actions.fetchQuotationsFailure(error))
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(actions.FETCH_QUOTATIONS_REQUEST, fetchQuotations)
  ])
}