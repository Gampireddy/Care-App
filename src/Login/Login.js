import React, { Component } from "react";
import {
  Card,
  Button,
  FormGroup,
  Label,
  CardBody,
  Col,
  Container
} from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import "../Login/Login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = { email: false, password: false, hide: false };
    this.handleValidSubmit = this.handleValidSubmit.bind(this);
    this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this);
  
  }
  handleValidSubmit(event, values) {
    this.setState({ email: values.email });
    this.setState({ password: values.password });

    console.log(values.email, values.password);
    localStorage.setItem("email", JSON.stringify(values.email));
    localStorage.setItem("password", JSON.stringify(values.password));
    this.startApp();
  }
  handleInvalidSubmit(event, errors, values) {
    this.setState({ email: values.email, error: true });
    this.setState({ password: values.password, error: true });
  }
  startApp(e) {
    this.props.history.push("/Charts");
  }

  render() {
    return (
      <div>
        <Container sm="12" md={{ size: 10, offset: 2 }}>
          <Card>
            <CardBody>
              <AvForm
                onValidSubmit={this.handleValidSubmit}
                onInvalidSubmit={this.handleInvalidSubmit}
              >
                <FormGroup row>
                  <Label sm={2} size="lg">
                    Email
                  </Label>
                  <Col sm={10}>
                    <AvField
                      type="email"
                      name="email"
                      placeholder="Email"
                      bsSize="lg"
                      required
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label sm={2} size="lg">
                    Password
                  </Label>
                  <Col sm={10}>
                    <AvField
                      type="password"
                      name="password"
                      placeholder="Password"
                      bsSize="lg"
                      required
                    />
                  </Col>
                </FormGroup>
                <Button color="success" className="d-block mx-auto">
                  Start
                </Button>
              </AvForm>
            </CardBody>
          </Card>
        </Container>
      </div>
    );
  }
}
export default Login;
