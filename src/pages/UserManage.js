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
const FormUser = () => {
  return (
    <Page>
      <Row>
        <Col xl={12} lg={12} md={12}>
          <Card>
            <CardHeader className="bg-gradient-theme">
              Manage Profile
            </CardHeader>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label for="id">User Id</Label>
                  <Input
                    type="text"
                    id="userid"
                    name="id"
                    placeholder="#U014"
                    readonly="true"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="id">User Name</Label>
                  <Input
                    type="text"
                    id="username"
                    name="id"
                    placeholder="Mathan"
                    readonly="true"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="pw">Password</Label>
                  <Input
                    type="password"
                    id="pw"
                    name="id"
                    value="*******"
                    readonly="true"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="pw">Password</Label>
                  <Input
                    type="password"
                    id="pw"
                    name="id"
                    placeholder="Enter New password"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="cpw">confirm password</Label>
                  <Input
                    type="password"
                    id="cpw"
                    name="id"
                    placeholder="Enter confirm password"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleText">Bio</Label>
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
export default FormUser;
