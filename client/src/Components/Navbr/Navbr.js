import React from "react";
import { Button, Navbar, Form, FormControl, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbr = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Link to="/">
          <Navbar.Brand href="#home">ContactsApp</Navbar.Brand>
        </Link>
        <Nav className="mr-auto">
          <Link to="/Add">
            <Nav.Link href="#contact">add new contact</Nav.Link>
          </Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
    </div>
  );
};

export default Navbr;
