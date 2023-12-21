import React from "react";
import Form from "react-bootstrap/Form";
import { Image } from "react-bootstrap";

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
    };
  }

  render() {
    return (
      <>
        {" "}
        <Form.Group>
          {this.state.username.length === 0 ? (
            <Form.Label>hello there</Form.Label>
          ) : (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Form.Label>hello {this.state.username}</Form.Label>
              <Image
                width={150}
                src="c1de2c521f1519c6933fcf0d08e0a26fef-27-spongebob-squarepants.rsquare.w400.webp"
                roundedCircle
              />
            </div>
          )}
          <Form.Control
            id="input"
            type="text"
            placeholder="Enter your full name"
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                this.setState({
                  username: e.target.value,
                });
                document.getElementById("input").value = "";
              }
            }}
          />
        </Form.Group>
      </>
    );
  }
}

export default User;
