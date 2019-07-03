import {FETCH_CURRENCIES_REQUEST, FETCH_CURRENCIES_SUCCESS, FETCH_CURRENCIES_FAILURE} from '../actions'
const initialState = { currencies:[], isLoading: false, error: null };

const reducer = (state, action) => {
  state = state || initialState;

  switch(action.type){
    case FETCH_CURRENCIES_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FETCH_CURRENCIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        currencies: action.currencies
      };
    case FETCH_CURRENCIES_FAILURE:
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