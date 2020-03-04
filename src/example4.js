import React, { Component } from "react";
import {
  Accordion,
  Icon,
  List,
  TransitionablePortal,
  Segment,
  Image
} from "semantic-ui-react";

export default class AccordionExampleStyled extends Component {
  state = { activeIndex: -1, open: false };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  handleOpen = () => this.setState({ open: true });

  handleClose = () => this.setState({ open: false });

  render() {
    const { activeIndex } = this.state;

    return (
      <Accordion styled style={{ width: "300px" }}>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          style={{ color: "green" }}
        >
          <Icon name="thumbs up outline" />
          MACHINE GREEN
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>VSA 1 approves of this person</p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
          style={{ color: "red" }}
        >
          <Icon name="thumbs down outline" />
          MACHINE RED
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>VSA 2 does not approve of this person</p>
          <List bulleted>
            <List.Item>Reason 1</List.Item>
            <List.Item>Reason 2</List.Item>
            <List.Item>Reason 3</List.Item>
          </List>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
          style={{ color: "red" }}
        >
          <Icon name="thumbs down outline" />
          MACHINE RED
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>VSA3 does not approve of this person</p>
          <List bulleted>
            <List.Item>
              She stole my
              <TransitionablePortal
                closeOnTriggerClick
                onOpen={this.handleOpen}
                onClose={this.handleClose}
                openOnTriggerClick
                trigger={<a href="javascript:;"> cat</a>}
              >
                <Segment
                  style={{
                    left: "40%",
                    position: "fixed",
                    top: "50%",
                    zIndex: 1000
                  }}
                >
                  <Image
                    src="data:image/jpeg;base64,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"
                    size="small"
                  />
                </Segment>
              </TransitionablePortal>
            </List.Item>
            <List.Item>Reason 2</List.Item>
            <List.Item>Reason 3</List.Item>
          </List>
        </Accordion.Content>
      </Accordion>
    );
  }
}
