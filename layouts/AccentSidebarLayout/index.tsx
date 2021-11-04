import { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { experimentalStyled } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

import Sidebar from './Sidebar';
import Header from './Header';

interface AccentSidebarLayoutProps {
  children?: ReactNode;
}

const MainWrapper = experimentalStyled(Box)(
  ({ theme }) => `
        flex: 1 1 auto;
        display: flex;
        height: 100%;
        
        @media (min-width: ${theme.breakpoints.values.lg}px) {
            padding-left: ${theme.sidebar.width};
        }
`
);

const MainContent = experimentalStyled(Box)(
  ({ theme }) => `
        margin-top: ${theme.header.height};
        flex: 1 1 auto;
        overflow: auto;
`
);

const AccentSidebarLayout: FC<AccentSidebarLayoutProps> = ({ children }) => {
  return (
    <>
      <Sidebar />
      <MainWrapper>
        <Header />
        <MainContent>{children}</MainContent>
      </MainWrapper>
    </>
  );
};

AccentSidebarLayout.propTypes = {
  children: PropTypes.node
};

export default AccentSidebarLayout;
