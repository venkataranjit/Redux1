import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  updateName,
  updateMobile,
  updateDeposit,
  updateWithdraw,
  addTransaction,
  withdrawTransaction,
} from "../reduxStore/actions";

const initialData = {
  name: "",
  mobile: "",
  balance: "",
};

const Update = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({ ...prevInput, [name]: value }));
  };

  const handleUpdateName = (name) => {
    dispatch(updateName(name));
  };
  const handleUpdateMobile = (mobile) => {
    dispatch(updateMobile(mobile));
  };
  const handleDeposit = (balance) => {
    dispatch(updateDeposit(balance));
    dispatch(addTransaction(balance));
  };
  const handleWithdraw = (balance) => {
    dispatch(updateWithdraw(balance));
    dispatch(withdrawTransaction(balance));
  };
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
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>
            <Button
              size="sm"
              variant="primary"
              onClick={() => handleUpdateName(input.name)}
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
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>
            <Button
              size="sm"
              variant="primary"
              onClick={() => handleUpdateMobile(input.mobile)}
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
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>
            <Button
              size="sm"
              variant="success"
              onClick={() => handleDeposit(input.balance)}
            >
              Deposit
            </Button>{" "}
            <Button
              size="sm"
              variant="danger"
              onClick={() => handleWithdraw(input.balance)}
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
