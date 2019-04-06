import Page from 'components/Page';
import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';
import { MdClearAll, MdInsertChart } from 'react-icons/md';
const FormPage = () => {
  return (
    <Page>
      <Row>
        <Col xl={12} lg={12} md={12}>
          <Card>
            <CardHeader className="bg-gradient-theme">Add Defects</CardHeader>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label for="id">Defect Id</Label>
                  <Input
                    type="text"
                    id="defectid"
                    name="id"
                    placeholder="#D014"
                    // readonly="true"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelect"> Module</Label>
                  <Input type="select" id="module" name="module">
                    <option>Select Module..</option>
                    <option>Module 1</option>
                    <option>Module 2</option>
                    <option>Module 3</option>
                    <option>Module 4</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelect"> severity</Label>
                  <Input type="select" id="severity" name="severity">
                    <option>Select severity..</option>
                    <option>High </option>
                    <option>Low</option>
                    <option>Medium</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelect"> Priority</Label>
                  <Input type="select" id="priority" name="Priority">
                    <option>Select Priority..</option>
                    <option>High </option>
                    <option>Low</option>
                    <option>Medium</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleText">Defect Description</Label>
                  <Input
                    type="textarea"
                    id="description"
                    placeholder="Defect Description"
                    name="description"
                    valid
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleText">Steps-to Recreate</Label>
                  <Input
                    type="textarea"
                    id="stepstorecreate"
                    placeholder="Steps-to Recreate"
                    name="recreate"
                    valid
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelect"> Defect Type</Label>
                  <Input type="select" id="defecttype" name="type">
                    <option>Defect Type..</option>
                    <option>Ui </option>
                    <option>Functionality</option>
                    <option>Enhancement</option>
                    <option>Performance</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelect"> Status</Label>
                  <Input type="select" id="status" name="status">
                    <option>Select Status..</option>
                    <option>New </option>
                    <option>Open</option>
                    <option>Fixed</option>
                    <option>Closed</option>
                    <option>Re-opened</option>
                    <option>Rejected</option>
                    <option>Deffered</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelect"> Assigned-Person</Label>
                  <Input type="select" id="assignedto" name="assignedperson">
                    <option>Assigned Person..</option>
                    <option>Mathan </option>
                    <option>Tyrone</option>
                    <option>Hari</option>
                    <option>Dilux</option>
                    <option>Mathan</option>
                    <option>Mathan</option>
                    <option>Mathan</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleUrl">Available In</Label>
                  <Input
                    type="text"
                    name="available"
                    id="availablein"
                    placeholder="Available in"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleNumber">Comments</Label>
                  <Input
                    type="textarea"
                    name="comments"
                    id="comments"
                    placeholder="comments"
                    valid
                  />
                </FormGroup>
                <Button
                  // onClick={addDefect()}
                  className="bg-gradient-theme-left border-0 margin 2px"
                >
                  <MdInsertChart /> &nbsp; Submit
                </Button>
                &nbsp;
                <Button type="reset" className="bg-dark">
                  <MdClearAll /> &nbsp; Clear
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page>
  );
};
// function addDefect() {
//   var data = JSON.stringify({
//     Defect_ID: document.querySelector('defectid').value,
//     Module: document.querySelector('module').value,
//     Severity: document.querySelector('severity').value,
//     Priority: document.querySelector('priority').value,
//     Description: document.querySelector('description').value,
//     Steps_to_recreate: document.querySelector('stepstorecreate').value,
//     Defect_Type: document.querySelector('defecttype').value,
//     Status: document.querySelector('status').value,
//     Assigned_To: document.querySelector('assignedto').value,
//     Available_in: document.querySelector('availablein').value,
//     Comments: document.querySelector('comments').value,
//   });

//   //console.log(document.getElementById("entereddate").value);

//   var xhr = new XMLHttpRequest();
//   console.log(xhr);
//   xhr.open('POST', 'http://localhost:3000/defect');
//   xhr.setRequestHeader('Content-type', 'application/json');
//   console.log(this.responseText);
//   xhr.send(data);
// }
export default FormPage;
