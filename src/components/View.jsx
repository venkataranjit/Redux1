import React from "react";
import { Row, Col, Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const View = () => {
  const { name, mobile, balance } = useSelector((state) => ({
    name: state.name,
    mobile: state.mobile,
    balance: state.balance,
  }));

  // const data = useSelector((state) => {
  //   return state;
  // });

  // console.log(data);

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
                <td>{name}</td>
                <td>{mobile}</td>
                <td>{balance}</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
};

export default View;
