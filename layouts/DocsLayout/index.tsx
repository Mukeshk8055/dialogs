import { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from 'src/components/Footer';
import Sidebar from './Sidebar';
import { experimentalStyled } from '@material-ui/core/styles';
import { Box, Card, Container } from '@material-ui/core';

interface DocsLayoutProps {
  children?: ReactNode;
}

const MainWrapper = experimentalStyled(Box)(
  () => `
    flex: 1;
    display: flex;
    height: 100%;
`
);

const MainContent = experimentalStyled(Box)(
  ({ theme }) => `
    flex: 1;
    margin-top: ${theme.spacing(10)};
    overflow: auto;
`
);

const DocsLayout: FC<DocsLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <MainWrapper>
        <Sidebar />
        <MainContent>
          <Container maxWidth="lg">
            <Card
              sx={{
                minHeight: 650,
                pb: 3,
                mb: 6,
                borderTopRightRadius: 0,
                borderTopLeftRadius: 0
              }}
            >
              {children}
            </Card>
          </Container>
          <Footer />
        </MainContent>
      </MainWrapper>
    </>
  );
};

DocsLayout.propTypes = {
  children: PropTypes.node
};

export default DocsLayout;
