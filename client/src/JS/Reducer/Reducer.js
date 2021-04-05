import {
  GET_CONTACT,
  ADD_CONTACT,
  LOAD_CONTACT,
  FAIL_CONTACT,
  GET_ONE_CONTACT,
} from "../ActionTypes/ActionType";
const initialState = {
  contactList: [{}],
  errors: null,
  loading: false,
  contact: {},
};
const contactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_CONTACT:
      return { ...state, loading: true };

    case FAIL_CONTACT:
      return { ...state, loading: false, errors: payload };
    case GET_CONTACT:
      return { ...state, loading: false, contactList: payload.contactS };
    case GET_ONE_CONTACT:
      return { ...state, loading: false, contact: payload.contactSearched };
    default:
      return state;
  }
};
export default contactReducer;
