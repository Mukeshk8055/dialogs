import { Box, Card, Container, Typography } from "@material-ui/core";
import { experimentalStyled } from "@material-ui/core/styles";

const FooterWrapper = experimentalStyled(Card)(
  ({ theme }) => `
  padding: ${theme.spacing(0, 2)};
  bottom:0;
  top:auto;
  right: 0;
  z-index: 5;
  position: fixed;
  justify-content: space-between;
  width: 100%;
  @media (min-width: ${theme.breakpoints.values.lg}px) {
      left: ${theme.sidebar.width};
      width: auto;
`
);

function Footer() {
  return (
    <FooterWrapper>
      <Container maxWidth="lg">
        <Box
          py={3}
          display={{ xs: "block", md: "flex" }}
          alignItems="center"
          textAlign={{ xs: "center", md: "left" }}
          justifyContent="space-between"
        >
          <Box>
            <Typography variant="subtitle1">
              &copy; 2021 - LOGICHIVE SOLUTIONS PVT LTD
            </Typography>
          </Box>
        </Box>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
