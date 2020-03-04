import React from "react";
import { Table } from "semantic-ui-react";

const TableExample = () => (
  <Table celled style={tableStyle}>
    <Table.Header>
      <Table.Row>
        {data.map(vsa => (
          <Table.HeaderCell key={vsa.id} style={hCellStyle}>
            {vsa.id}
          </Table.HeaderCell>
        ))}
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        {data.map(vsa => (
          <Table.Cell
            key={vsa.id}
            style={
              vsa.meta.response === "MACHINE GREEN" ? cellStyle1 : cellStyle2
            }
          >
            <div>{vsa.meta.response}</div>
            {vsa.meta.explanation.map(info => (
              <div style={{ paddingTop: "10px" }}>
                <a href="http://www.google.com">{info}</a>
              </div>
            ))}
          </Table.Cell>
        ))}
      </Table.Row>
    </Table.Body>
  </Table>
);

const hCellStyle = {
  textAlign: "center",
  width: "30%",
  fontSize: "18px"
};

const cellStyle1 = {
  textAlign: "center",
  backgroundColor: "#58FA58",
  height: "500px",
  fontSize: "16px"
};

const cellStyle2 = {
  textAlign: "center",
  backgroundColor: "#F78181",
  fontSize: "16px"
};

const tableStyle = {
  borderRadius: "5px",
  borderWidth: "3px",
  borderColor: "#BDBDBD"
};

let data = [
  {
    id: "VSA1",
    meta: {
      response: "MACHINE GREEN",
      explanation: []
    }
  },
  {
    id: "VSA2",
    meta: {
      response: "MACHINE RED",
      explanation: ["Illegal thing 1", "Illegal thing 2"]
    }
  },
  {
    id: "VSA3",
    meta: {
      response: "MACHINE RED",
      explanation: ["Illegal thing 2", "Illegal thing 3"]
    }
  }
];

export default TableExample;
