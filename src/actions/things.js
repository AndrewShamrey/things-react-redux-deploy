import { SET_THINGS, SET_NEW_THINGS, DELETE_THING, INC_PAGE } from "../actionTypes/things";
import fetchData from "../utils/fetchData";

const setThings = (data) => ({
  type: SET_THINGS,
  payload: data,
});

const setNewThings = (data) => ({
  type: SET_NEW_THINGS,
  payload: data,
});

const deleteThing = () => ({
  type: DELETE_THING,
});

export const incPage = () => ({
  type: INC_PAGE,
});

export const requestThings = (page, limit = 10, isNew = false) => (dispatch) => {
  return fetchData("GET", null, null, page, limit)
    .then((response) => response.json())
    .then((data) => {
      if (isNew) {
        dispatch(setNewThings(data)); 
      } else {
        dispatch(setThings(data));
      }
    })
    .catch((e) => alert(e));
};

export const requestDeleteThing = (id, page) => (dispatch) => {
  const currentLimit = page * 10;
  return fetchData("DELETE", id)
    .then(() => dispatch(requestThings(1, currentLimit, true)))
    .then(() => dispatch(deleteThing()))
    .catch((e) => alert(e));
};
