import {
  FETCH_RANDOM_GREETING_REQUEST,
  FETCH_RANDOM_GREETING_SUCCESS,
  FETCH_RANDOM_GREETING_FAILURE,
} from './actions';

const initialState = {
  greeting: '',
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RANDOM_GREETING_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_RANDOM_GREETING_SUCCESS:
      return {
        ...state,
        loading: false,
        greeting: action.payload,
      };
    case FETCH_RANDOM_GREETING_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
