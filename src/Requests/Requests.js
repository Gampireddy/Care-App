import React from "react";
import { Table, Button, Row, Col } from "reactstrap";
import Main from "../MainNav/MainNav.js";
import "../Requests/Requests.css";
import Header from "../Header/Header.js";
import ImageUploader from "react-images-upload";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
  Card
} from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

library.add(faPlus);

export default class Requests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      pictures: [],
      name: false,
      pocname: false,

      email: false,
      phonenumber: false,
      gender: false,
      age: false,
      address: false,
      cause: false,
      requestAmount: false,
      status: false
    };

    this.toggle = this.toggle.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.handleValidSubmit = this.handleValidSubmit.bind(this);
    this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this);
  }
  onDrop(picture) {
    this.setState({
      pictures: this.state.pictures.concat(picture)
    });
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
        {/* <Col className="adduser" md={{ size: 2, offset: 10 }}> */}

        <Modal
          centered
          isOpen={this.state.modal}
          toggle={this.toggle}
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
                <AvField type="name" name="name" id="nmae" required/>
              </FormGroup>
              <FormGroup>
                <Label for="poc">POC Name</Label>
                <AvField type="text" name="poc" id="poc" required/>
              </FormGroup>
              <FormGroup>
                <Label for="Email">Email</Label>
                <AvField type="email" name="email" id="Email" required/>
              </FormGroup>

              <FormGroup>
                <Label for="Phonenumber">phonenumber</Label>
                <AvField
                  type="phonenumber"
                  name="phonenumber"
                  id="phonenumber"
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label>Gender</Label>
                <AvField type="select" name="select" id="gender" required>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </AvField>
              </FormGroup>
              <FormGroup>
                <Label for="age">Age</Label>
                <AvField type="integer" name="age" id="age" required/>
              </FormGroup>
              <FormGroup>
                <Label for="address">Address</Label>
                <AvField type="textarea" name="address" id="Enter Address" required/>
              </FormGroup>
              <FormGroup>
                <Label for="cause">Cause</Label>
                <AvField type="text" name="cause" id="Enter Cause" required/>
              </FormGroup>
              <FormGroup>
                <Label for="amount">Request Amount</Label>
                <AvField type="integer" name="amount" id="amount" required/>
              </FormGroup>
              <FormGroup>
                <FormGroup>
                  <Label for="file">File or Image</Label>
                  <AvField type="file" name="file" id="exampleFile" required/>
                </FormGroup>
              </FormGroup>
              <FormGroup>
                <Label>Status</Label>
                <AvField type="select" name="status" id="status" disabled>
                  <option>Open</option>
                  <option>pending</option>
                  <option>Done</option>
                  <option>Cancel</option>
                </AvField>
              </FormGroup>
              <ModalFooter>
                <Button color="primary" >
                  Submit
                </Button>{" "}
                <Button color="secondary" onClick={this.toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </AvForm>
          </ModalBody>
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
