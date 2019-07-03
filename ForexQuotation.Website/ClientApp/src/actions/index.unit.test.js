import * as actions from '../actions';

describe('actions', () => {
  it('should create an action to create a quotation', () => {
    const quotation = {firstName: 'Tom', lastName: 'Hanks', email: 'tomh@yahoo.com.au', phone: '+61460606060', fromCurrencyCode: 'AUD', toCurrency: 'USD', amount: 10000, ofxCustomerRate: 0.72, ofxCustomerAmount: 7200};
    const expectedAction = {
      type: actions.CREATE_QUOTATION_REQUEST,
      quotation
    };
    expect(actions.createQuotation(quotation)).toEqual(expectedAction);
  }),
  it('should create an action to fetch quotations', () => {
    const expectedAction = {
      type: actions.FETCH_QUOTATIONS_REQUEST
    };
    expect(actions.fetchQuotations()).toEqual(expectedAction);
  })
})