import * as ACTION_TYPES from "../actionTypes/things";

const initialState = { things: [], page: 1 };

const thingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_THINGS:
      return {
        ...state,
        things: state.things.concat(action.payload),
      };
    case ACTION_TYPES.SET_NEW_THINGS:
      return {
        ...state,
        things: action.payload,
      };
    case ACTION_TYPES.INC_PAGE:
      return {
        ...state,
        page: state.page + 1,
      };
    case ACTION_TYPES.DELETE_THING:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default thingsReducer;
