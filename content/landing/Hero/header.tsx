
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';

import Toolbar from '@material-ui/core/Toolbar';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import logo from './logo.jpg';
import { Box, Button } from '@material-ui/core';



function Header() {


    return (
        <div>
            <Divider style={{ color: "black", width: "100%", marginTop: "50px" }}></Divider>
            <Box style={{ position: 'sticky' }}>
                <AppBar style={{ width: "100vw", height: "100px", background: "transparent" }} position="static">
                    <Toolbar>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div>
                                <img style={{ width: "120px", height: "100px" }} src={logo} alt="einstonLogo" />

                            </div>
                            <div>
                                <Typography style={{ color: "#000000", fontSize: "20px", marginLeft: "-20px" }}
                                    variant="h2" noWrap>
                                    Einston Labs
                                </Typography>
                            </div>
                        </div>
                        <TextField
                            className="search-header"
                            style={{ width: "60%", marginLeft: "100px", background: "#FFFFFF", borderRadius: "5%" }}
                            sx={{ m: 0 }}
                            InputProps={{
                                startAdornment: (
                                    <SearchTwoToneIcon style={{ fontSize: "22px", marginRight: "10px" }} />
                                )
                            }}
                            placeholder='Search'
                            fullWidth
                            margin="normal"
                            variant="outlined"
                        />
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <Typography style={{ marginLeft: "35px", color: "#1C1D1F", fontSize: "16px" }}
                        
                            >
                                Dashboard</Typography>
                            <div style={{ marginLeft: "10px" }}>
                            </div>
                            <Button style={{
                                marginLeft: "3%", width: "90px", height: "40px", fontSize: "14px"
                            }}
                                variant="contained" color="primary"
                            >Log in</Button>
                            <Button style={{ marginLeft: "10px", width: "100px", marginRight: "20px", height: "40px", fontSize: "14px" }}
                                color="primary"
                                variant="contained"
                                
                                size="large"
                            >Sign up</Button>

                        </div>
                    </Toolbar>
                </AppBar>
            </Box>

        </div>
    )
}

export default Header