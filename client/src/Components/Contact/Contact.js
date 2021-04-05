import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { del } from "../../JS/Action/Action";
import { get } from "../../JS/Action/Action";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={contact.img} />
        <Card.Body>
          <Card.Title>{contact.Firstname}</Card.Title>
          <Card.Text>{contact.phone}</Card.Text>
          <Link to={`/Profile/${contact._id}`}>
            <Button variant="primary">Show profile</Button>
          </Link>

          <Button
            variant="primary"
            onClick={() => {
              dispatch(del(contact._id));
              dispatch(get());
            }}
          >
            Delete
          </Button>

          <Link to={`/Edit/${contact._id}`}>
            <Button variant="primary">Edit</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Contact;
