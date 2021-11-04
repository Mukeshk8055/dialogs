import { useState } from 'react';
import { Box, Container, Hidden, Card, Button } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import ContentWrapper from 'src/components/ContentWrapper';
import { useTranslation } from 'react-i18next';
import { experimentalStyled } from '@material-ui/core/styles';
import Logo from 'src/components/Logo';
import Menu from './Menu';
import Hero from './Hero';
// import SettingsButton from 'src/layouts/SidebarLayout/Header/Buttons/Settings';
import Footer from './LandingFooter';
import useRefMounted from 'src/hooks/useRefMounted';
import useAuth from 'src/hooks/useAuth';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
// import UserLoginInPortal from './Menu/UserLoginInPortal';

const HeaderWrapper = experimentalStyled(Card)(
  ({ theme }) => `
    width: 100%;
    border-radius: 0;
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 6;
    top: 0;
    height: ${theme.spacing(10)};
`
);

const OverviewWrapper = experimentalStyled(Box)(
  ({ theme }) => `
    overflow: auto;
    // flex: 1;
    overflow-x: visible;
    margin-top: ${theme.spacing(10)};
`
);

function Overview() {
  const { t }: { t: any } = useTranslation();
  const { loginWithPopup } = useAuth() as any;
  const isMountedRef = useRefMounted();
  const [error, setError] = useState<string | null>(null);
  console.log(error)
  const { isAuthenticated } = useAuth();

  const handleLogin = async (): Promise<void> => {
    try {
      await loginWithPopup();
    } catch (err) {
      console.log(err);
      if (isMountedRef.current) {
        setError(err.message);
      }
    }
  };

  return (
    <OverviewWrapper>
      <ContentWrapper title="New age Learning">
        <HeaderWrapper>
          <Container maxWidth="xl">
            <Box display="flex" alignItems="center" >
              <Logo />
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                flex={1}
              >
                <Menu />
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Hidden smDown>
                    <Box className="wishlist">
                      <Tooltip title="Wishlist" arrow>
                        <IconButton>
                          <FavoriteTwoToneIcon color="primary" />
                        </IconButton>
                      </Tooltip>
                    </Box>

                    <Box className="shopping-cart">
                      <Tooltip title="Shopping Cart" arrow>
                        <IconButton>
                          <ShoppingCartTwoToneIcon color="primary" />
                        </IconButton>
                      </Tooltip>
                    </Box>

                    {/* <SettingsButton /> */}
                  </Hidden>


                  {isAuthenticated ?
                    <>
                      <Button
                        size="small"
                        component={RouterLink}
                        to="/dashboard"
                        variant="contained"
                      >
                        {t('Dashboard')}
                      </Button>
                      {/* <UserLoginInPortal /> */}
                    </>
                    :
                    <Button
                      size="small"
                      onClick={handleLogin}
                      variant="contained"
                    >
                      {t('Login')}
                    </Button>}
                </Box>
              </Box>
            </Box>
          </Container>
        </HeaderWrapper>
        <Hero />
      </ContentWrapper>
      <Footer />
    </OverviewWrapper>
  );
}

export default Overview;
