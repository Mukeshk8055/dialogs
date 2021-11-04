import { useContext } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { SidebarContext } from 'src/contexts/SidebarContext';
import SidebarTopSection from './SidebarTopSection';

import { Box, Drawer, Hidden } from '@material-ui/core';

import { experimentalStyled } from '@material-ui/core/styles';
import SidebarMenu from './SidebarMenu';
import Logo from 'src/components/LogoSign';

const SidebarWrapper = experimentalStyled(Box)(
  ({ theme }) => `
        width: ${theme.sidebar.width};
        color: ${theme.sidebar.textColor};
        background: ${theme.sidebar.background};
        box-shadow: ${theme.sidebar.boxShadow};
        height: 100%;
        
        @media (min-width: ${theme.breakpoints.values.lg}px) {
            position: fixed;
            z-index: 10;
        }
`
);

const TopSection = experimentalStyled(Box)(
  ({ theme }) => `
        margin: ${theme.spacing(2)};
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
              <Box sx={{ width: 52, ml: 1, mt: 1, mb: 3 }}>
                <Logo />
              </Box>
              <SidebarTopSection />
            </TopSection>
            <SidebarMenu />
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
                <Box sx={{ width: 52, ml: 1, mt: 1, mb: 3 }}>
                  <Logo />
                </Box>
                <SidebarTopSection />
              </TopSection>
              <SidebarMenu />
            </Scrollbars>
          </SidebarWrapper>
        </Drawer>
      </Hidden>
    </>
  );
}

export default Sidebar;
