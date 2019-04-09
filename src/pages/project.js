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
const FormProject = () => {
  return (
    <Page>
      <Row>
        <Col xl={12} lg={12} md={12}>
          <Card>
            <CardHeader className="bg-gradient-theme">
              Manage Projects
            </CardHeader>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label for="id">Project Id</Label>
                  <Input
                    type="text"
                    id="projectid"
                    name="id"
                    placeholder="#P222"
                    readonly="true"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="id">Project Name</Label>
                  <Input
                    type="text"
                    id="username"
                    name="id"
                    placeholder="Enter Project Name"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelect"> Assigned Users</Label>
                  <Input type="select" id="module" name="module">
                    <option>Select User..</option>
                    <option>Mathan</option>
                    <option>Hari</option>
                    <option>Tyrone</option>
                    <option>Dilux</option>
                  </Input>
                </FormGroup>
                {/* <FormGroup check>
                  <Label check>
                    <Input type="checkbox" /> {'Mathan'}
                  </Label>
                </FormGroup> */}
                <FormGroup>
                  <Label for="exampleText">Project Description</Label>
                  <Input
                    type="textarea"
                    id="bio"
                    placeholder="User Bio"
                    name="description"
                    valid
                  />
                </FormGroup>
                <Button
                  // onClick={addDefect()}
                  className="bg-blue border-0 margin 2px"
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
export default FormProject;
