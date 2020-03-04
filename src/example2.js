import React from "react";
import { Card } from "semantic-ui-react";

const CardExample = () => (
  <div>
    {data.map(vsa => (
      <span>
        <Card
          key={vsa.id}
          style={{
            width: "31%",
            float: "left",
            marginRight: "15px",
            backgroundColor:
              vsa.meta.response === "MACHINE GREEN" ? "#58FA58" : "#F78181"
          }}
        >
          <Card.Content>
            <Card.Header style={{ textAlign: "center" }}>{vsa.id}</Card.Header>
            <Card.Description
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "16px"
              }}
            >
              {vsa.meta.response}
            </Card.Description>
          </Card.Content>
          <Card.Content extra style={{ height: "300px" }}>
            {vsa.meta.explanation.map(e => (
              <div>
                <a href="0.0.0.0" style={{ fontSize: "18px" }}>
                  {e}
                </a>
              </div>
            ))}
          </Card.Content>
        </Card>
      </span>
    ))}
  </div>
);

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

export default CardExample;
