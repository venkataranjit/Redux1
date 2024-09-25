import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addName, addMobile, deposite, withdraw } from "../reduxStore/action";

const initialData = {
  name: "",
  mobile: "",
  balance: "",
};

const Update = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState(initialData);
  const [error, setError] = useState("");

  const inputHandler = (e) => {
    const { name, value } = e.target;
    // setInput((prevInput) => ({ ...prevInput, [name]: value }));
    setInput({ ...input, [name]: value });
    if (error) {
      setError(""); // Clear the error when typing
    }
  };

  const add = () => {
    if (input.name.trim().length === 0) {
      setError("Enter any  Name");
    } else if (input.name.length < 3) {
      setError("Enter a Valid Name which is 3 characters");
    } else {
      dispatch(addName(input.name));
      setInput((prevInput) => ({ ...prevInput, name: "" }));
    }
  };

  if (error) {
    setTimeout(() => {
      setError("");
    }, 10000);
  }

  return (
    <>
      <h5>Update</h5>
      <Form>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                name="name"
                value={input.name}
                onChange={(e) => inputHandler(e)}
              />
            </Form.Group>
            {error && <p>{error}</p>}
            <Button
              size="sm"
              variant="primary"
              //   onClick={() => dispatch(addName(input.name))}
              onClick={add}
            >
              Update Name
            </Button>{" "}
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="ControlInput2">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Mobile"
                name="mobile"
                value={input.mobile}
                onChange={(e) => inputHandler(e)}
              />
            </Form.Group>
            <Button
              size="sm"
              variant="primary"
              onClick={() => {
                dispatch(addMobile(input.mobile));
                setInput({ ...input, mobile: "" });
              }}
            >
              Update Mobile
            </Button>{" "}
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="ControlInput3">
              <Form.Label>Balance</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Amount"
                name="balance"
                value={input.balance}
                onChange={(e) => inputHandler(e)}
              />
            </Form.Group>
            <Button
              size="sm"
              variant="success"
              onClick={() => dispatch(deposite(input.balance))}
            >
              Deposit
            </Button>{" "}
            <Button
              size="sm"
              variant="danger"
              onClick={() => dispatch(withdraw(input.balance))}
            >
              Withdraw
            </Button>{" "}
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Update;
