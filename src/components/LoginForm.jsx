import React from "react";

import styles from "./LoginForm.module.css";
import { Form, Button, Card } from "react-bootstrap";
import RegisterModal from "./RegisterModal";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      show: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleShow() {
    this.setState({
      show: true,
    });
  }

  handleClose() {
    this.setState({
      show: false,
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <Card className={styles.cardStyle}>
          <Card.Body>
            <Card.Header>
              <Card.Title className={styles.cardTitle}>
                <h3>Sing in</h3>
              </Card.Title>
            </Card.Header>
            <Form>
              <Form.Group controlId="loginFormUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleInputChange}
                  placeholder="Enter Username"
                />
              </Form.Group>
              <Form.Group controlId="loginFormPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group className={styles.btnForm}>
                <Button
                  className={styles.loginBtn}
                  variant="primary"
                  type="submit"
                >
                  Login
                </Button>
              </Form.Group>
            </Form>
          </Card.Body>
          <Card.Footer>
            <div className={styles.register}>
              Don't have an account?
              <a href="#" className={styles.link} onClick={this.handleShow}>
                Sign Up
              </a>
            </div>
          </Card.Footer>
        </Card>
        <RegisterModal show={this.state.show} handleClose={this.handleClose} />
      </div>
    );
  }
}

export default LoginForm;
