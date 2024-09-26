import React from "react";
import { Row, Col, Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const View = () => {
  const data = useSelector((state) => state);
  return (
    <>
      <h5 className="mt-4">View Data</h5>
      <Row>
        <Col>
          <Table striped bordered hover size="sm">
            <thead className="table-primary">
              <tr>
                <th>Name</th>
                <th>Mobile</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{data.account.name}</td>
                <td>{data.account.mobile}</td>
                <td>{data.account.balance}</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <h5 className="mt-4">View Transactions</h5>
      <Row>
        <Col>
          <Table striped bordered hover size="sm">
            <thead className="table-primary">
              <tr>
                <th>ID</th>
                <th>Transaction Amount</th>
                <th>Transaction Type</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {(data.transaction || []).map((eachItem) => {
                return (
                  <tr key={eachItem.id}>
                    <td>{eachItem.id}</td>
                    <td>{eachItem.amount}</td>
                    <td>{eachItem.transactionType}</td>
                    <td>{eachItem.date.toString()}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
};

export default View;
