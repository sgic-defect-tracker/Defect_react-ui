import { AnnouncementCard, TodosCard } from 'components/Card';
import HorizontalAvatarList from 'components/HorizontalAvatarList';
import MapWithBubbles from 'components/MapWithBubbles';
import Page from 'components/Page';
import ProductMedia from 'components/ProductMedia';
import SupportTicket from 'components/SupportTicket';
import UserProgressTable from 'components/UserProgressTable';
import { IconWidget, NumberWidget } from 'components/Widget';
import { getStackLineChart, stackLineChartOptions } from 'demos/chartjs';
import {
  avatarsData,
  chartjs,
  productsData,
  supportTicketsData,
  todosData,
  userProgressTableData,
} from 'demos/dashboardPage';
import React from 'react';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';

import { randomNum } from 'utils/demos';
import {
  MdBubbleChart,
  MdInsertChart,
  MdPersonPin,
  MdPieChart,
  MdRateReview,
  MdShare,
  MdShowChart,
  MdThumbUp,
  MdStar,
  MdBugReport,
  MdSupervisorAccount,
} from 'react-icons/md';
import InfiniteCalendar from 'react-infinite-calendar';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardDeck,
  CardGroup,
  CardHeader,
  CardTitle,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
} from 'reactstrap';

import { getColor } from 'utils/colors';

const today = new Date();
const lastWeek = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 7,
);

const genPieData = () => {
  return {
    datasets: [
      {
        data: [randomNum(), randomNum(), randomNum(), randomNum()],
        backgroundColor: [
          getColor('danger'),
          getColor('primary'),
          getColor('success'),
          getColor('dark'),
        ],
        label: 'Severity Chart',
      },
    ],
    labels: ['High', 'Medium', 'Low', 'Extreme'],
  };
};
class DashboardPage extends React.Component {
  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  }

  render() {
    const primaryColor = getColor('primary');
    const secondaryColor = getColor('success');
    const successColor = getColor('success');

    return (
      <Page>
        <Row>
          <Col lg={4} md={6} sm={6} xs={12}>
            <NumberWidget
              title="TOTAL DEFECTS"
              subtitle="Better Than Last time"
              number="15"
              color="success"
              progress={{
                value: 40,
                label: 'BUGS AVAILABLE',
              }}
            />
          </Col>

          <Col lg={4} md={6} sm={6} xs={12}>
            <NumberWidget
              title="COMPLETED"
              subtitle="Worse than last week "
              number="25"
              color="red"
              progress={{
                value: 40,
                label: 'COMPLETED',
              }}
            />
          </Col>

          <Col lg={4} md={6} sm={6} xs={12}>
            <NumberWidget
              title="PENDING"
              subtitle="Worse than last week"
              number="20"
              color="secondary"
              progress={{
                value: 60,
                label: 'PENDING',
              }}
            />
          </Col>
        </Row>

        <Row>
          <Col md="4" sm="6" xs="12">
            <CardGroup style={{ marginBottom: '1rem' }}>
              <IconWidget
                bgColor="secondary"
                inverse={true}
                icon={MdBugReport}
                title="50+ new bugs"
                subtitle="Assigned"
              />
            </CardGroup>
          </Col>

          <Col md="4" sm="6" xs="12">
            <CardGroup style={{ marginBottom: '1rem' }}>
              <IconWidget
                bgColor="primary"
                inverse={true}
                icon={MdRateReview}
                title="10+ Projects"
                subtitle="Completed"
              />
            </CardGroup>
          </Col>

          <Col md="4" sm="6" xs="12">
            <CardGroup style={{ marginBottom: '1rem' }}>
              <IconWidget
                bgColor="success"
                inverse={true}
                icon={MdSupervisorAccount}
                title="30+ users"
                subtitle="Assigned"
              />
            </CardGroup>
          </Col>
        </Row>
        <Row>
          <Col xl={6} lg={12} md={12}>
            <Card>
              <CardHeader>Severity Chart</CardHeader>
              <CardBody>
                <Doughnut data={genPieData()} />
              </CardBody>
            </Card>
          </Col>

          <Col xl={6} lg={12} md={12}>
            <Card>
              <CardHeader>Priority Chart</CardHeader>
              <CardBody>
                <Doughnut data={genPieData()} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Page>
    );
  }
}
export default DashboardPage;
