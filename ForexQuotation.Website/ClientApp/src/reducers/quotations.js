import {FETCH_QUOTATIONS_REQUEST, FETCH_QUOTATIONS_SUCCESS, FETCH_QUOTATIONS_FAILURE} from '../actions'

const initialState = { quotations: [], quotation: null, jobDone: false, isLoading: false, error: null };

const reducer = (state, action) => {
  state = state || initialState;

  switch(action.type){
    case FETCH_QUOTATIONS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FETCH_QUOTATIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        quotations: action.quotations
      };
    case FETCH_QUOTATIONS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
export default reducer;