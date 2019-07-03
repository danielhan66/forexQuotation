import * as actions from '../actions'
import reducer from './quotations'

describe('quotations reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      { quotations: [], quotation: null, jobDone: false, isLoading: false, error: null }
    );
  });
})