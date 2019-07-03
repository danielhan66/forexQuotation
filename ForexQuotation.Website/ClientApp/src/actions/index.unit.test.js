import * as actions from '../actions';

describe('actions', () => {
  it('should create an action to fetch quotations', () => {
    const expectedAction = {
      type: actions.FETCH_QUOTATIONS_REQUEST
    };
    expect(actions.fetchQuotations()).toEqual(expectedAction);
  })
})