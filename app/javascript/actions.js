import axios from 'axios';

export const FETCH_RANDOM_GREETING_REQUEST = 'FETCH_RANDOM_GREETING_REQUEST';
export const FETCH_RANDOM_GREETING_SUCCESS = 'FETCH_RANDOM_GREETING_SUCCESS';
export const FETCH_RANDOM_GREETING_FAILURE = 'FETCH_RANDOM_GREETING_FAILURE';

export const fetchRandomGreeting = () => async (dispatch) => {
  dispatch({ type: FETCH_RANDOM_GREETING_REQUEST });

  try {
    const response = await axios.get('/api/random_greeting');
    dispatch({
      type: FETCH_RANDOM_GREETING_SUCCESS,
      payload: response.data.greeting,
    });
  } catch (error) {
    dispatch({ type: FETCH_RANDOM_GREETING_FAILURE, payload: error.message });
  }
};
