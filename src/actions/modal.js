import { SHOW_MODAL, CLOSE_MODAL, SET_CURRENT_ID, HANDLE_INPUT_CHANGE, CHANGE_WARNING, ADD_NEW_ATTRIBUTE } from "../actionTypes/modal";
import fetchData from "../utils/fetchData";
import { requestThings } from "./things";

export const showModal = () => ({
  type: SHOW_MODAL,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});

export const setCurrentId = (id) => ({
  type: SET_CURRENT_ID,
  payload: id,
});

const changeWarning = (str) => ({
  type: CHANGE_WARNING,
  payload: str,
});

const forHandleInput = (attributes) => ({
  type: HANDLE_INPUT_CHANGE,
  payload: attributes,
});

export const handleInputChange = (e) => (dispatch, getState) => {
  const state = getState();
  const target = e.target;
  const index = +target.getAttribute("index");
  const value = target.value;
  const name = target.name;

  const newArray = state.modal.attributes.slice();
  newArray[index][name] = value;

  if (state.modal.warningClass) {
    dispatch(changeWarning(""));
  }
  return dispatch(forHandleInput(newArray));
};

const addNewAttribute = () => ({
  type: ADD_NEW_ATTRIBUTE,
});

export const addLabel = () => (dispatch, getState) => {
  const state = getState();
  const currentLabel = state.modal.attributes.length - 1;
  if (!state.modal.attributes[0].value || !state.modal.attributes[currentLabel - 1].name) {
    dispatch(changeWarning("warning-modal"));
    return;
  }
  return dispatch(addNewAttribute());
};

export const requestSendThing = () => (dispatch, getState) => {
  const state = getState();
  
  const currentLabel = state.modal.attributes.length - 1;
  const label = state.modal.attributes[currentLabel - 1];
  if (!label.name && label.value) {
    dispatch(changeWarning("warning-modal"));
    return;
  }

  const currentAttributes = state.modal.attributes.filter((item) => item.name);
  const keys = currentAttributes.slice().map((item) => item.name);
  let values = currentAttributes.slice().map((item) => item.value);
  if (!values[0]) {
    dispatch(changeWarning("warning-modal"));
    return;
  }

  function validatedValues(arr) {
    return arr.map((item) => {
      try {
        if (typeof JSON.parse(item) === "number") {
          return item;
        }
        return JSON.parse(item);
      } catch (e) {
        if (item === "") {
          return undefined;
        }
        return item;
      }
    });
  }
  values = validatedValues(values);

  const newThing = {};
  for (let i = 0; i < keys.length; i++) {
    newThing[keys[i]] = values[i];
  }

  const id = state.modal.currentId;
  const method = id ? "PUT" : "POST";
  dispatch(closeModal());

  const currentPage = state.things.page - 1;
  const currentLimit = currentPage * 10;
  return fetchData(method, id, JSON.stringify(newThing))
    .then(() => dispatch(requestThings(1, currentLimit, true)))
    .catch((e) => alert(e));
};
