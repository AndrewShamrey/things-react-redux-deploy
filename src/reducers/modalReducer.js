import * as ACTION_TYPES from "../actionTypes/modal";

const buildState = () => ({
  attributes: [
    { name: "name", value: "" },
    { name: "", value: "" },
  ],
  currentId: "",
  showClass: "",
  warningClass: "",
});

const initialState = { ...buildState() };

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SHOW_MODAL:
      return {
        ...state,
        showClass: "modal-visible",
      };
    case ACTION_TYPES.CLOSE_MODAL:
      return {
        ...buildState(),
      };
    case ACTION_TYPES.SET_CURRENT_ID:
      return {
        ...state,
        currentId: action.payload,
      };
    case ACTION_TYPES.CHANGE_WARNING:
      return {
        ...state,
        warningClass: action.payload,
      };
    case ACTION_TYPES.ADD_NEW_ATTRIBUTE:
      return {
        ...state,
        attributes: [...state.attributes, { name: "", value: "" }],
      };
    case ACTION_TYPES.HANDLE_INPUT_CHANGE:
      return {
        ...state,
        attributes: action.payload,
      };
    default:
      return state;
  }
};

export default modalReducer;
