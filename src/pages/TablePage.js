import Page from 'components/Page';
import React from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table,
  Button,
} from 'reactstrap';
import {
  MdAccountCircle,
  MdArrowDropDownCircle,
  MdBorderAll,
  MdBrush,
  MdChromeReaderMode,
  MdDashboard,
  MdExtension,
  MdGroupWork,
  MdInsertChart,
  MdKeyboardArrowDown,
  MdNotificationsActive,
  MdPages,
  MdRadioButtonChecked,
  MdSend,
  MdStar,
  MdTextFields,
  MdViewCarousel,
  MdViewDay,
  MdViewList,
  MdWeb,
  MdWidgets,
} from 'react-icons/md';

const tableTypes = ['', 'bordered', 'striped', 'hover'];

const TablePage = () => {
  return (
    <Page>
      <Row>
        <Col>
          <Card className="mb-3">
            <h5 className="table-primary"> # DEFECTS DETAILS </h5>
            <Table responsive>
              <thead>
                <tr className="table-primary" scope="3">
                  <th>Defect ID</th>
                  <th>Module Name</th>
                  <th>Description</th>
                  <th>Assign To</th>
                  <th>Severity</th>
                  <th>Priority</th>
                  <th>Defect Type</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>U001</td>
                  <td>UI Login</td>
                  <td>Login error found</td>
                  <td>Hari</td>
                  <td>High</td>
                  <td>Medium</td>
                  <td>Functionality</td>

                  <td>
                    <select
                      class="browser-default custom-select"
                      id="status-dropdown"
                    >
                      <option selected>Open</option>
                      <option value="Open">Open</option>
                      <option value="Closed">Closed</option>
                      <option value="Rejected">Rejected</option>
                      <option value="Deferred">Deferred</option>
                      <option value="Re-opened">Re-opened</option>
                    </select>
                  </td>
                </tr>
                <tr className="table-danger">
                  <td>U002</td>
                  <td>Register Page</td>
                  <td>Register error found</td>
                  <td>Mathan</td>
                  <td>High</td>
                  <td>Medium</td>
                  <td>Enchacement</td>
                  <td>
                    <select
                      class="browser-default custom-select"
                      id="status-dropdown"
                    >
                      <option selected>Rejected</option>
                      <option value="Open">Open</option>
                      <option value="Closed">Closed</option>
                      <option value="Rejected">Rejected</option>
                      <option value="Deferred">Deferred</option>
                      <option value="Re-opened">Re-opened</option>
                    </select>
                  </td>
                </tr>
                <tr className="table-active">
                  <td>U003</td>
                  <td>UI Login</td>
                  <td>Login error found</td>
                  <td>tyrone</td>
                  <td>low</td>
                  <td>High</td>
                  <td>Functionality</td>
                  <td>
                    <select
                      class="browser-default custom-select"
                      id="status-dropdown"
                    >
                      <option selected>Closed</option>
                      <option value="Open">Open</option>
                      <option value="Closed">Closed</option>
                      <option value="Rejected">Rejected</option>
                      <option value="Deferred">Deferred</option>
                      <option value="Re-opened">Re-opened</option>
                    </select>
                  </td>
                </tr>
                <tr className="table-danger">
                  <td>U004</td>
                  <td>Database Check</td>
                  <td>DB error found</td>
                  <td>Dilux</td>
                  <td>High</td>
                  <td>Medium</td>
                  <td>Functionality</td>
                  <td>
                    <select
                      class="browser-default custom-select"
                      id="status-dropdown"
                    >
                      <option selected>Rejected</option>
                      <option value="Open">Open</option>
                      <option value="Closed">Closed</option>
                      <option value="Rejected">Rejected</option>
                      <option value="Deferred">Deferred</option>
                      <option value="Re-opened">Re-opened</option>
                    </select>
                  </td>
                </tr>
                <tr className="table-success">
                  <td>U005</td>
                  <td>Backend Check</td>
                  <td>Backend error found</td>
                  <td>theepan</td>
                  <td>low</td>
                  <td>Medium</td>
                  <td>Functionality</td>
                  <td>
                    <select
                      class="browser-default custom-select"
                      id="status-dropdown"
                    >
                      <option selected>Re-opened</option>
                      <option value="Open">Open</option>
                      <option value="Closed">Closed</option>
                      <option value="Rejected">Rejected</option>
                      <option value="Deferred">Deferred</option>
                      <option value="Re-opened">Re-opened</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    </Page>
  );
};

export default TablePage;
