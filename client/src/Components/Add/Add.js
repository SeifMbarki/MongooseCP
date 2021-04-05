import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, getOne, Update } from "../../JS/Action/Action";
const Add = ({ match }) => {
  const [contact, setContact] = useState({});
  const a = useSelector((state) => state.contactReducer.contact);
  const dispatch = useDispatch();

  return (
    <div>
      {useEffect(() => {
        if (match.params.id) {
          dispatch(getOne(match.params.id));

          setContact(a);
        }
      }, [a])}
      <form>
        <label htmlFor="fname">First name:</label>
        <br />
        <input
          type="text"
          id="fname"
          name="fname"
          value={contact.Firstname}
          onChange={(e) => {
            setContact({ ...contact, Firstname: e.target.value });
          }}
        />
        <br />
        <label htmlFor="lname">Last name:</label>
        <br />
        <input
          type="text"
          id="lname"
          name="lname"
          value={contact.Lastname}
          onChange={(e) => {
            setContact({ ...contact, Lastname: e.target.value });
          }}
        />
        <br />
        <label htmlFor="fname">Email:</label>
        <br />
        <input
          type="text"
          id="fname"
          name="fname"
          value={contact.email}
          onChange={(e) => {
            setContact({ ...contact, email: e.target.value });
          }}
        />
        <br />
        <label htmlFor="lname">Phone:</label>
        <br />
        <input
          type="number"
          id="lname"
          name="lname"
          value={contact.phone}
          onChange={(e) => {
            setContact({ ...contact, phone: e.target.value });
          }}
        />
        <br />
        <input
          type="submit"
          value="Submit"
          onClick={(e) => {
            e.preventDefault();
            if (match.params.id) {
              dispatch(Update(match.params.id, contact));
              setContact({});
              return;
            }
            dispatch(add(contact));
            setContact({});
          }}
        />
      </form>
    </div>
  );
};

export default Add;
