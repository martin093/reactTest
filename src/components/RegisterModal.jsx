import React from "react";

import { Modal, Form, Button } from "react-bootstrap";

class RegisterModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <Form.Group controlId="registerFormUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChange}
                placeholder="Enter Username"
              />
            </Form.Group>
            <Form.Group controlId="registerFormEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                placeholder="Enter Email"
              />
            </Form.Group>
            <Form.Group controlId="registerFormPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                placeholder="Password"
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.props.handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              type="submit"
              onClick={this.props.handleClose}
            >
              Register
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  }
}

export default RegisterModal;
