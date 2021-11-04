import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Button, Box, Card, } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import ThreeCards from './InterfaceHoveringThreeCards'

interface ThreeCardsProps {
    hoverCards: ThreeCards[];
}
const HoveringThreeCards: React.FC<ThreeCardsProps> = ({ hoverCards }: ThreeCardsProps) => {
    return (
        <Card className="checkout-out-solutions" style={{ width: "95vw", height: "auto", marginTop: "50px", background: "white", marginLeft: "2.5vw" }}>
            <Box
             className="title" style={{
                    width: "100%",
                    lineHeight: " 1.2",
                    letterSpacing: "-.04rem",
                    fontSize: " 2.4rem",
                    color: "#141414",
                    marginLeft: "10px",
                    fontWeight: "bold",
                    marginTop: "15px",
                    textAlign: "center",
                    zIndex: -99,
                }}>Checkout out our other solutions!
            </Box>
            <div className="threeCards"
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    position: "static",
                    alignItems: "center",
                    justifyContent: "space-around",
                    margin: "40px",
                    cursor: "grab",
                }}
            >
                {hoverCards.map((item, id) => (
                    <div key={id} >
                        <Box className="hoverMe1"
                            style={{ width: "330px", height: "470px", marginTop: '20px', backgroundColor: "white", boxShadow: "3px 3px 3px 3px #E0E0E0" }}>
                            <Typography style={{ marginTop: "15px", marginLeft: "10px", fontSize: "18px", color: "#717171", fontWeight: "bold" }}>
                                {item.title}</Typography>
                            <Typography style={{ marginLeft: "10px" }}>
                                {item.discription}
                            </Typography>
                            <div style={{ marginTop: "15px", marginLeft: "10px" }}>
                                <li>{item.l1}</li>
                                <li>{item.l2}</li>
                                <li>{item.l3}</li>
                            </div>
                            <Typography style={{ marginTop: "15px", marginLeft: "10px", fontSize: "18px", color: "#717171", fontWeight: "bold" }}>
                                Usage Scenario</Typography>
                            <Typography style={{ marginLeft: "10px", marginRight: "10px" }}>
                                <li>IT training distance learning</li>
                                <li>Employee partner</li>
                                <li>Customer training product rollouts</li>
                                <li>certification </li>
                                <li>IT training distance learning</li>
                                <li>Employee partner</li>
                                <li>Customer training product rollouts</li>
                                <li>certification </li>
                            </Typography>
                            <div style={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginTop: "20px",
                                padding: "10px"
                            }}>
                                <Button style={{
                                    width: "150px",
                                    height: "30px"
                                }}
                                    variant="contained"
                                    color="primary"
                                    component={RouterLink}
                                    to="/preview/dashboards/hostevent"
                                    size="small"
                                >{item.button}</Button>
                                <Link color="inherit" style={{ fontSize: "11px", marginTop: "10px" }}>
                                    {item.read}</Link>
                            </div>
                        </Box>
                        <Box className="hoveringCard1"
                            style={{
                                width: "330px", height: "470px", position: "absolute", marginTop: "-470px", backgroundColor: "white",
                                boxShadow: "3px 3px 3px 3px #E0E0E0"
                            }}>
                            <img style={{ width: "330px", height: "220px" }} src={item.image} alt="imageHover" />
                            <Typography style={{ marginTop: "15px", marginLeft: "10px", fontSize: "18px", color: "#717171", fontWeight: "bold" }}>
                                {item.title}</Typography>
                            <Typography style={{ marginLeft: "10px", marginRight: "10px" }}>
                                {item.discription}
                            </Typography>
                            <div style={{ marginTop: "15px", marginLeft: "10px" }}>
                                <li>{item.list1}</li>
                                <li>{item.list2}</li>
                                <li>{item.list3}</li>
                            </div>
                        </Box>
                    </div>
                ))}
            </div>
        </Card>
    )
}
export default HoveringThreeCards