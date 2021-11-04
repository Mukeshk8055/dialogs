import { useContext } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { SidebarContext } from 'src/contexts/SidebarContext';

import { Box, Drawer, Hidden } from '@material-ui/core';

import { experimentalStyled } from '@material-ui/core/styles';
// import SidebarMenu from './SidebarMenu';
import SidebarTopSection from './SidebarTopSection';
import MenuContainer from 'src/container/MenuContainer';

const SidebarWrapper = experimentalStyled(Box)(
  ({ theme }) => `
        width: ${theme.sidebar.width};
        min-width: ${theme.sidebar.width};
        color: ${theme.sidebar.textColor};
        background: ${theme.sidebar.background};
        box-shadow: ${theme.sidebar.boxShadow};
        position: relative;
        z-index: 5;
        height: 100%;
        @media (min-width: ${theme.breakpoints.values.lg}px) {
          height: calc(100% - 74px);
          margin-top: 74px;
        }
`
);

const TopSection = experimentalStyled(Box)(
  ({ theme }) => `
        margin: ${theme.spacing(2, 2)};
`
);

function Sidebar() {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const closeSidebar = () => toggleSidebar();

  return (
    <>
      <Hidden lgDown>
        <SidebarWrapper>
          <Scrollbars autoHide>
            <TopSection>
              <SidebarTopSection />
            </TopSection>
            <MenuContainer />
          </Scrollbars>
        </SidebarWrapper>
      </Hidden>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          open={sidebarToggle}
          onClose={closeSidebar}
          variant="temporary"
          elevation={9}
        >
          <SidebarWrapper>
            <Scrollbars autoHide>
              <TopSection>
                <SidebarTopSection />
              </TopSection>
              <MenuContainer />
            </Scrollbars>
          </SidebarWrapper>
        </Drawer>
      </Hidden>
    </>
  );
}

export default Sidebar;
