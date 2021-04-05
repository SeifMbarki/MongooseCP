import axios from "axios";
import {
  ADD_CONTACT,
  LOAD_CONTACT,
  FAIL_CONTACT,
  GET_CONTACT,
  DELETE_CONTACT,
  GET_ONE_CONTACT,
  EDIT_CONTACT,
} from "../ActionTypes/ActionType";
//Get All Contacts
export const get = () => async (dispatch) => {
  dispatch({ type: LOAD_CONTACT });
  try {
    const result = await axios.get("/api/contact");
    dispatch({ type: GET_CONTACT, payload: { ...result.data } });
    return;
  } catch (error) {
    dispatch({ type: FAIL_CONTACT, payload: error.response });
  }
};
//Add Contact
export const add = (payload) => async (dispatch) => {
  dispatch({ type: LOAD_CONTACT });
  try {
    await axios.post("/api/contact", payload);
    dispatch({ type: ADD_CONTACT });
    return;
  } catch (error) {
    dispatch({ type: FAIL_CONTACT, payload: error.response });
  }
};
//Delete Contact
export const del = (payload) => async (dispatch) => {
  dispatch({ type: LOAD_CONTACT });
  try {
    await axios.delete(`/api/contact/${payload}`);
    dispatch({ type: DELETE_CONTACT });
    return;
  } catch (error) {
    dispatch({ type: FAIL_CONTACT, payload: error.response });
  }
};
//Get contact by id
export const getOne = (id) => async (dispatch) => {
  dispatch({ type: LOAD_CONTACT });
  try {
    const result = await axios.get(`/api/contact/${id}`);
    dispatch({ type: GET_ONE_CONTACT, payload: result.data });
    return;
  } catch (error) {
    dispatch({ type: FAIL_CONTACT, payload: error.response });
  }
};
//Update contact
export const Update = (id, payload) => async (dispatch) => {
  dispatch({ type: LOAD_CONTACT });
  try {
    await axios.put(`/api/contact/${id}`, payload);
    dispatch({ type: EDIT_CONTACT });
    return;
  } catch (error) {
    dispatch({ type: FAIL_CONTACT, payload: error.response });
  }
};
