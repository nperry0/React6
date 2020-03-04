import React from "react";
import { Label, Popup } from "semantic-ui-react";

const LabelExampleImage = () => (
  <div
    style={{
      position: "absolute",
      left: "10px",
      bottom: "0px"
    }}
  >
    <Popup
      content="Good to go!"
      trigger={
        <Label as="a" color="green" image>
          VSA 1<Label.Detail>MACHINE GREEN</Label.Detail>
        </Label>
      }
    />
    <Popup
      on="click"
      pinned
      trigger={
        <Label as="a" color="red" image>
          VSA 2<Label.Detail>MACHINE RED</Label.Detail>
        </Label>
      }
      size="huge"
    >
      <p>List of reasons:</p>
      <p>Reason 1</p>
      <p>Reason 2</p>
      <p>Reason 3</p>
    </Popup>
    <Popup
      on="click"
      pinned
      trigger={
        <Label as="a" color="red" image>
          VSA 3<Label.Detail>MACHINE RED</Label.Detail>
        </Label>
      }
      size="huge"
    >
      <p>List of reasons:</p>
      <p>Reason 1</p>
      <p>Reason 2</p>
      <p>Reason 3</p>
    </Popup>
  </div>
);

export default LabelExampleImage;
