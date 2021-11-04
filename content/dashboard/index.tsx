import ContentWrapper from 'src/components/ContentWrapper';
import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Container} from '@material-ui/core';

function Dashboard() {
  return (
    <ContentWrapper title="Dashboard">
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="xl">
            Home
      </Container>
    </ContentWrapper>
  );
}

export default Dashboard;
