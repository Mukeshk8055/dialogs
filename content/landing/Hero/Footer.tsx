
import Typography from '@material-ui/core/Typography';
import {
    Grid, Box,
} from '@material-ui/core';
import logoOne from './einstonLogo.png';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import Link from '@material-ui/core/Link';
import "./Footer.css"
import Divider from "@material-ui/core/Divider";



function Footer() {
    return (
        <div>

      <Divider style={{ color: "black", width: "100%", marginTop: "0px" }}></Divider>


            <Grid container className="footer">
                <Box className="footer-container">
                    <Box className="footer-eniston-contain">
                        <Box className="einston-logo-container">
                            <Box className="footer-eniston-logo" >
                                <img className="footer-eniston-logo-image"
                                    src={logoOne} alt="einston-logo" />
                             </Box>
                             <Typography style={{ color: "#141414", fontSize: "36px", fontWeight: "bold", marginLeft: "-30px" }}
                                variant="h6" noWrap>
                                Einston <span style={{ fontSize: "36px", fontWeight: "lighter" }}>Labs</span>
                            </Typography>
                        </Box>


                        <Box className="footer-contain-typography" >

                            <Typography fontWeight="bold" >
                                <Typography  >Machine learning is the science of getting computers
                                    to act without being explicitly programmed.
                                    In the past decade,machine learning has given us self-driving cars, practical speech recognition,
                                    effective web search. </Typography>
                                <br />

                                <Typography >Machine learning is the science of getting computers
                                    to act without being explicitly programmed.
                                    In the past decade, machine learning has given us self-driving cars, practical speech recognition,
                                    effective web search.  </Typography>

                            </Typography>


                        </Box>



                    </Box>


                    <Box className="footer-container-list" >
                        <Box className="product-container" style={{
                            display: "flex", flexDirection: "column", fontSize: "14px", cursor: "pointer"
                           }}>

                            <Typography style={{
                                fontWeight: "bold",
                            }}>Product</Typography>

                            <Link color="inherit" > Pricing</Link>
                            <Link color="inherit" >Virtual Events</Link>
                            <Link color="inherit" >Trainings</Link>
                            <Link color="inherit" >Webinars</Link>
                            <Link color="inherit" >Solutions</Link>
                            <Link color="inherit" >Platform</Link>
                            <Link color="inherit" >Get A Demo</Link>
                        </Box>



                        <Box className="company-container" style={{ display: "flex", flexDirection: "column", cursor: "pointer" }}>
                            <Typography fontWeight="bold"
                            >Company  </Typography>
                            <Link color="inherit" > About</Link>
                            <Link color="inherit" >Careers</Link>
                            <Link color="inherit" >Our Partners</Link>
                            <Link color="inherit" >Newsroom</Link>
                        </Box>

                        <Box className="help-and-resource-container" style={{ display: "flex", flexDirection: "column", cursor: "pointer" }}>
                            <Typography fontWeight="bold">Help & Resources </Typography>
                            <Link color="inherit" > Contact Us</Link>
                            <Link color="inherit" >Blog</Link>
                            <Link color="inherit" >Insite Learning Portal</Link>
                            <Link color="inherit" >FAQ's</Link>
                        </Box>


                    </Box>

                </Box>
            </Grid>

        </div>
    )
}
export default Footer;