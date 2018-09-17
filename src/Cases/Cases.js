import React from "react";
import { Table, Button, Row, Col } from "reactstrap";
import Main from "../MainNav/MainNav.js";

import Header from "../Header/Header.js";
import "../Team/Team.css";
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

library.add(faPlus);

export default class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        {/* <Col className="adduser" md={{ size: 2, offset: 10 }}> */}

        <Modal
          centered
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Details</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="Name">Name</Label>
                <Input type="name" name="name" id="nmae" />
              </FormGroup>
              <FormGroup>
                <Label for="Email">Email</Label>
                <Input type="email" name="email" id="Email" />
              </FormGroup>

              <FormGroup>
                <Label for="Phonenumber">phonenumber</Label>
                <Input type="phonenumber" name="phonenumber" id="phonenumber" />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Submit
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        {/* </Col> */}

        <Row>
          <Header />
          <Main />
          <div className="col-lg-11 col-md-10">
          <Table hover>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>POC</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Age</th>
                  <th>Address</th>
                  <th>Cause</th>
                  <th>Amount</th>
                  <th>Image</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Row>
        {/* <Button
          className="adduser text-center"
          outline
          color="warning"
          onClick={this.toggle}
        >
          <FontAwesomeIcon icon="plus" />
          <br />
          New
          {this.props.buttonLabel}
        </Button> */}

        {/* </Row> */}
      </div>
    );
  }
}
