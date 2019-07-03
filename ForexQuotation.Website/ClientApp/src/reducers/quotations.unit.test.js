import * as actions from '../actions'
import reducer from './quotations'

describe('quotations reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      { quotations: [], quotation: null, jobDone: false, isLoading: false, error: null }
    );
  });

  it('should handle create a quotation', () => {
    expect(reducer(undefined, {
      type: actions.CREATE_QUOTATION_SUCCESS,
      quotation: {firstName: 'Tom', lastName: 'Hanks', email: 'tomh@yahoo.com.au', phone: '+61460606060', fromCurrencyCode: 'AUD', toCurrency: 'USD', amount: 10000, ofxCustomerRate: 0.72, ofxCustomerAmount: 7200}
    })).toEqual(
      { quotations: [{firstName: 'Tom', lastName: 'Hanks', email: 'tomh@yahoo.com.au', phone: '+61460606060', fromCurrencyCode: 'AUD', toCurrency: 'USD', amount: 10000, ofxCustomerRate: 0.72, ofxCustomerAmount: 7200}], quotation: {firstName: 'Tom', lastName: 'Hanks', email: 'tomh@yahoo.com.au', phone: '+61460606060', fromCurrencyCode: 'AUD', toCurrency: 'USD', amount: 10000, ofxCustomerRate: 0.72, ofxCustomerAmount: 7200}, jobDone: true, isLoading: false, error: null }
    );
  });
})