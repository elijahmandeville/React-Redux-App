import {
  FETCHING_QUOTE_START,
  FETCHING_QUOTE_SUCCESS,
  FETCHING_QUOTE_FAILURE
} from "../reducers/cardActions";

export const initialState = {
  quote: null,
  isFetching: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_QUOTE_START:
      console.log("PAYLOAD", action.payload);
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCHING_QUOTE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        quote: action.payload
      };
    case FETCHING_QUOTE_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
