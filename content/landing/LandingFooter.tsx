import { Box, Card, Container, Typography } from "@material-ui/core";
import { experimentalStyled } from "@material-ui/core/styles";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import googleIcon from './google icon.png'

const FooterWrapper = experimentalStyled(Card)(
  ({ theme }) => `
  padding: ${theme.spacing(0, 2)};
  bottom:0;
  top:auto;
  right: 0;
  z-index: 5;
  position: fixed;
  display:"flex"
  justify-content: space-between;
  width: 100%;
`
);

function Footer() {
  return (
    <FooterWrapper>
      <Container maxWidth="lg">
        <Box
          py={3}
          display={{ xs: "block" }}
          alignItems="center"
          textAlign={{ xs: "center"}}
          justifyContent="space-between"
        >
          <Box display="flex" justifyContent="space-between">
            <Box >
              <Typography variant="subtitle1" >
                &copy; 2021-LOGICHIVE SOLUTIONS PVT LTD
              </Typography>
            </Box>

            <Box display="flex" justifyContent="space-around" sx={{width:"10vw"}}>
              <FacebookIcon
                fontSize="medium"
                style={{ color: "#000000",cursor: "pointer" }}
              />


              <img
                style={{ width: "25px", height: "25px",cursor: "pointer"}}
                src={googleIcon} alt="googleLogo" />

              <TwitterIcon
                fontSize="medium"
                style={{ color: "#000000",cursor: "pointer" }}
              />

              < InstagramIcon
                fontSize="medium"
                style={{ color: "#000000",cursor: "pointer" }}
              />
            </Box>

          </Box>
        </Box>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
