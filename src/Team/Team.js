import React from "react";
// eslint-disable-next-line
import { Table, Button, Row, Col } from "reactstrap";
import Main from "../MainNav/MainNav.js";
import "../Team/Team.css";
import Header from "../Header/Header.js";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Card
} from "reactstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { AvForm, AvField } from "availity-reactstrap-validation";
library.add(faPlus);

export default class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: false,
      email: false,
      phonenumber: false
    };

    this.toggle = this.toggle.bind(this);

    this.handleValidSubmit = this.handleValidSubmit.bind(this);
    this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleValidSubmit(event, values) {
    this.setState({
      email: values.email,
      phonenumber: values.phonenumber,
      name: values.name,
      modal: !this.state.modal
    });
  }
  handleInvalidSubmit(event, errors, values) {
    this.setState({
      email: values.email,
      phonenumber: values.phonenumber,
      name: values.name,
      error: true
    });
  }

  render() {
    return (
      <div>
        <Modal
          centered
          isOpen={this.state.modal}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Details</ModalHeader>

          <ModalBody>
            <AvForm
              onValidSubmit={this.handleValidSubmit}
              onInvalidSubmit={this.handleInvalidSubmit}
            >
              <FormGroup>
                <Label for="Name">Name</Label>
                <AvField type="name" name="name" id="name" required />
              </FormGroup>
              <FormGroup>
                <Label>Email</Label>
                <AvField type="email" name="email" id="email" required />
              </FormGroup>

              <FormGroup>
                <Label for="Phonenumber">phonenumber</Label>
                <AvField
                  type="phonenumber"
                  name="phonenumber"
                  id="phonenumber"
                  values={this.state.phonenumber}
                  required
                />
              </FormGroup>
              <ModalFooter>
                <Button color="primary">Submit</Button>
              </ModalFooter>
            </AvForm>
          </ModalBody>
        </Modal>

        {/* </Col> */}

        <Row>
          <Header />
          <Main />
          <div className="col-lg-11 col-md-10">
            <Table hover bordered striped>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phonen Number</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>{this.state.phonenumber}</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Row>
        <Button
          className="adduser text-center"
          outline
          color="warning"
          onClick={this.toggle}
        >
          <FontAwesomeIcon icon="plus" />
          <br />
          New
          {this.props.buttonLabel}
        </Button>

        {/* </Row> */}
      </div>
    );
  }
}
