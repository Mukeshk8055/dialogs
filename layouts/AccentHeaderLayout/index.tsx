import { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { experimentalStyled } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import Footer from 'src/components/Footer';
import Sidebar from './Sidebar';
import Header from './Header';

interface AccentHeaderLayoutProps {
  children?: ReactNode;
}

const MainWrapper = experimentalStyled(Box)(
  ({theme}) => `
        flex: 1 1 auto;
        display: flex;
        height: 100%;
`
);

const MainContent = experimentalStyled(Box)(
  () => `
        margin-top: 74px;
        flex: 1 1 auto;
        overflow: auto;
        margin-bottom:77px
`
);

const AccentHeaderLayout: FC<AccentHeaderLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <MainWrapper>
        <Sidebar /> 
        <MainContent >{children}</MainContent>
        <Footer/>
      </MainWrapper>
  
    </>
  );
};

AccentHeaderLayout.propTypes = {
  children: PropTypes.node
};

export default AccentHeaderLayout;
