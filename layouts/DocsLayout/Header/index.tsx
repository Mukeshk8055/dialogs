import { Card, Box, Button } from '@material-ui/core';
import { experimentalStyled } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import SettingsButton from 'src/layouts/SidebarLayout/Header/Buttons/Settings';

import Logo from 'src/components/Logo';

const HeaderWrapper = experimentalStyled(Card)(
  ({ theme }) => `
    width: 100%;
    border-radius: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    z-index: 6;
    top: 0;
    padding: 0 ${theme.spacing(2)};
    height: ${theme.spacing(10)};
`
);

function Header() {
  const { t }: { t: any } = useTranslation();

  return (
    <HeaderWrapper>
      <Logo />
      <Box>
        <SettingsButton />
        <Button
          component={RouterLink}
          to="/preview/dashboards/analytics"
          variant="contained"
          sx={{ mx: 2 }}
        >
          {t('View Live Preview')}
        </Button>
        <Button
          href="https://material-ui.com/store/items/tokyo-react-admin-dashboard"
          target="_blank"
          rel="noopener"
          variant="outlined"
        >
          {t('Buy template')}
        </Button>
      </Box>
    </HeaderWrapper>
  );
}

export default Header;
