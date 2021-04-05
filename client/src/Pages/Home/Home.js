import React, { useEffect } from "react";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { get } from "../../JS/Action/Action";
import Contact from "../../Components/Contact/Contact";
const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.contactReducer.contactList);
  console.log("this data", data);
  return (
    <div className="ggg">
      {useEffect(() => {
        dispatch(get());
      }, [])}

      {data.map((el) => (
        <Contact contact={el} key={el._id} />
      ))}
    </div>
  );
};

export default Home;
