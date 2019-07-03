import {CREATE_QUOTATION_REQUEST, CREATE_QUOTATION_SUCCESS, CREATE_QUOTATION_FAILURE, FETCH_QUOTATIONS_REQUEST, FETCH_QUOTATIONS_SUCCESS, FETCH_QUOTATIONS_FAILURE} from '../actions'

const initialState = { quotations: [], quotation: null, jobDone: false, isLoading: false, error: null };

const reducer = (state, action) => {
  state = state || initialState;

  switch(action.type){
    case CREATE_QUOTATION_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
        jobDone: false
      };
    case CREATE_QUOTATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        jobDone: true,
        quotations: [...state.quotations, action.quotation],
        quotation: action.quotation
      };
    case CREATE_QUOTATION_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
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