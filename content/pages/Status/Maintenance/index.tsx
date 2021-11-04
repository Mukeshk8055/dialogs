import {
  Box,
  Typography,
  Container,
  Divider,
  IconButton,
  Tooltip
} from '@material-ui/core';
import ContentWrapper from 'src/components/ContentWrapper';
import Logo from 'src/components/LogoSign';

import { useTranslation } from 'react-i18next';
import { experimentalStyled } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const MainContent = experimentalStyled(Box)(
  () => `
    height: 100%;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
);

function StatusMaintenance() {
  const { t }: { t: any } = useTranslation();

  return (
    <ContentWrapper title="Status - Maintenance">
      <MainContent>
        <Container maxWidth="md">
          <Logo />
          <Box textAlign="center">
            <Container maxWidth="xs">
              <Typography variant="h2" sx={{ mt: 4, mb: 2 }}>
                {t('The site is currently down for maintenance')}
              </Typography>
              <Typography
                variant="h3"
                color="text.secondary"
                fontWeight="normal"
                sx={{ mb: 4 }}
              >
                {t('We apologize for any inconveniences caused')}
              </Typography>
            </Container>
            <img
              alt="Maintenance"
              height={250}
              src="/static/images/status/maintenance.svg"
            />
          </Box>
          <Divider sx={{ my: 4 }} />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography component="span" variant="subtitle1">
                {t('Phone')}:{' '}
              </Typography>
              <Typography
                component="span"
                variant="subtitle1"
                color="text.primary"
              >
                + 00 1 888 555 444
              </Typography>
            </Box>
            <Box>
              <Tooltip arrow placement="top" title="Facebook">
                <IconButton color="primary">
                  <FacebookIcon />
                </IconButton>
              </Tooltip>
              <Tooltip arrow placement="top" title="Twitter">
                <IconButton color="primary">
                  <TwitterIcon />
                </IconButton>
              </Tooltip>
              <Tooltip arrow placement="top" title="Instagram">
                <IconButton color="primary">
                  <InstagramIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </Container>
      </MainContent>
    </ContentWrapper>
  );
}

export default StatusMaintenance;
