
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import AccessAlarmSharpIcon from '@material-ui/icons/AccessAlarm';
import { Swiper, SwiperSlide } from 'swiper/react';
import { experimentalStyled } from '@material-ui/core/styles';

// import 'swiper/swiper.min.css';
// import 'swiper/components/navigation/navigation.scss';
// import 'swiper/components/pagination/pagination.scss';
import CheckIcon from '@mui/icons-material/Check';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { classroomData } from './InterfaceClassroom';
import ArrowLeftOutlinedIcon from '@material-ui/icons/ArrowLeftOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';



import {
    Grid, Card, Box,
    Typography
} from '@material-ui/core';
import './classroom.css'

SwiperCore.use([Navigation, Pagination]);


const TypeTextTitle = experimentalStyled(Typography)(
    () => `
    overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 2; /* number of lines to show */
   -webkit-box-orient: vertical;
    `
)


const Classroom: React.FC = () => {


    const [data, setData] = useState<classroomData[]>([]);
    const [cardHover, setCardHover] = useState(undefined);


    useEffect(() => {
        async function fetchMyAPI() {
            const response = await axios.get("https://api.einstonlabs.com/api/v1/event/");
            console.log(response.data.data)
            setData(response.data.data);
        }

        fetchMyAPI()

    }, [])

    return (
        <div >


            <Grid className="grid-container" container >
                <Box className="card-container" style={{
                    backgroundColor: "#F5F8FB"
                    // ,border: "2px solid "
                }} >
                    <Box className="box-container" >Classroom </Box>
                    <Typography className="course-card-subtitle" style={{ marginLeft: "20px" }} >
                        Skills for your present (and your future). Get started with us.</Typography>
                    <Swiper
                        // className="mySwiper"
                        spaceBetween={0}
                        slidesPerView={5}
                        navigation={true}
                        breakpoints={{
                            100: {
                                slidesPerView: 1,
                                spaceBetween: 0
                            },
                            500: {
                                slidesPerView: 2,
                                spaceBetween: 0
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 0
                            },
                            1340: {
                                slidesPerView: 5,
                                spaceBetween: 0
                            }
                        }}
                    >
                        <Box>


                            {data.length && data.map((element, id) => (
                                <SwiperSlide key={id}>
                                    {/* sx={{border:"2px solid red"}} */}
                                    <Box className="classroom-all-contain" onMouseLeave={() => setCardHover(undefined)}>
                                        <Box className="box-all-containent"
                                            onMouseEnter={() => setCardHover(id)}

                                        >
                                            <img className="box-image" src="https://picsum.photos/seed/picsum/200/300" alt="classroomImage" />
                                            <Box className="icon-container" display="flex" justifyContent="space-between">
                                                <Typography style={{ textDecoration: "underline" }}> {new Date(element.fromDate).toLocaleDateString()}
                                                </Typography>
                                                <AccessAlarmSharpIcon className="watch-icon" />
                                                <Typography > {new Date(element.fromDate).toLocaleTimeString()}</Typography>
                                            </Box>

                                            <TypeTextTitle className="title" fontWeight="bold" sx={{ marginTop: "5px" }} >
                                                {element.topic}</TypeTextTitle>

                                            <Typography fontSize="small" >
                                                {element.category}
                                            </Typography>

                                            <Typography style={{ fontSize: "12px", marginTop: "5px" }}>
                                                By:{element.organizedBy}</Typography>

                                            {element.commercials.value ? <Typography className="course-price" style={{
                                                marginTop: "5px",
                                                marginBottom: "5px",
                                                fontSize: "20px", fontWeight: "bold"
                                            }}>
                                                ₹{element.commercials.value}</Typography> : <Typography style={{
                                                    marginTop: "5px",
                                                    marginBottom: "5px",
                                                    fontSize: "20px", fontWeight: "bold"
                                                }} > Free</Typography>}

                                            {element.badge ? <span className="tag">{element.badge} </span> : null}

                                        </Box>


                                        {cardHover === id ?
                                            <Box className="hover-card" >
                                                <Card

                                                    variant="outlined"

                                                    // style={{
                                                    //     width: "340px",
                                                    //     height: "auto",
                                                    //     marginLeft: "281px",
                                                    //     position: "absolute",
                                                    //     top: "0px",
                                                    //     // border:"2px solid ",
                                                    //     overflow: "visible",
                                                    //     zIndex: 99
                                                    // }} 

                                                    style={cardHover === 3 || cardHover === 4 || cardHover === 8 || cardHover === 9 ? {
                                                      width: "340px",
                                                    //   border:"2px solid",
                                                    //   backgroundColor:"#E0E0E0", 
                                                      height: "auto",
                                                      marginLeft: "-342px",
                                                      marginBottom: "100px",
                                                      position: "absolute",
                                                      top: "0px",
                                                      overflow: "visible",
                                                      zIndex: 99,
                                                     } : {
                                                      width: "340px",
                                                      height: "auto",
                                                      marginLeft: "281px",
                                                      position: "absolute",
                                                      top: "0px",
                                                    //   border:"2px solid ",
                                                      overflow: "visible",
                                                      zIndex: 99
                                                    }}
                                                    onMouseLeave={() => setCardHover(undefined)}
                                                // onMouseOut={() => setCardHover(undefined)}
                                                >



                                                    <div style={{ marginRight: "15px", marginLeft: "15px", marginBottom: "15px" }}>
                                                        <div className="arrow">
                                                            {cardHover === 3 || cardHover === 8 || cardHover === 9 || cardHover === 4 ? <ArrowRightIcon className="arrowLeft"
                                                                style={{ height: "22%", width: "40%", padding: "3px", color: "#E0E0E0", marginLeft: "261px", marginTop: "110px", position: "absolute", zIndex: 99 }} />
                                                                :<ArrowLeftOutlinedIcon className="arrowRight"
                                                                    style={{ height: "20%", width: "40%", padding: "3px", color: "#E0E0E0", marginLeft: "-92px", marginTop: "110px", position: "absolute", zIndex: 99 }} />}

                                                        </div>


                                                        <Typography style={{ marginTop: "10px", fontSize: "18px", color: "#1C1D1F", fontWeight: "bold" }}>
                                                            {element.topic}</Typography>

                                                        <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
                                                            <span style={{ marginTop: "0px", backgroundColor: "#ECEB98", paddingLeft: "2.5px", paddingRight: "2.5px" }} >{element.badge} </span>
                                                            <Typography style={{ marginLeft: "10px" }}>Updated<span style={{ fontWeight: "bold", marginLeft: "3px" }}>July 2021</span></Typography>
                                                        </div>

                                                        <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
                                                            <Typography style={{ marginLeft: "10px", color: "#6A6F73" }}>All levels<FiberManualRecordIcon style={{ fontWeight: "bold", marginLeft: "3px", fontSize: "8px" }} /><span style={{ marginLeft: "3px", fontSize: "14px", color: "#6A6F73" }}>Subtittle</span> </Typography>

                                                        </div>



                                                        <Typography sx={{ mb: 1 }}>{element.description}</Typography>

                                                        <Typography display="flex" alignItems="stretch" sx={{ mb: 1 }} ><CheckIcon fontSize="small" sx={{ mr: 2 }} />{element.prerequisite}</Typography>
                                                        <Typography display="flex" alignItems="stretch" sx={{ mb: 1 }} ><CheckIcon fontSize="small" sx={{ mr: 2 }} /> {element.about}</Typography>
                                                        <Typography display="flex" alignItems="stretch" sx={{ mb: 1 }} ><CheckIcon fontSize="small" sx={{ mr: 2 }} />{element.category}</Typography>


                                                        {/* <ul style={{ color: "#1C1D1F",lineHeight:"150%" }}>
                                                            <li style={{ color: "#1C1D1F" }}>{element.prerequisite}</li>
                                                            <li style={{ color: "#1C1D1F" }}>{element.about}</li>
                                                            <li style={{ color: "#1C1D1F" }}>{element.category}</li>

                                                        </ul> */}

                                                        <div style={{ marginTop: "0px", marginRight: "20px", marginBottom: "20px", alignItems: "center", display: "flex", justifyContent: "space-between" }}>
                                                            <button

                                                                style={{
                                                                    fontSize: "15px", fontWeight: "bold", width: "80%", cursor: "pointer", paddingTop: "15px", paddingBottom: "15px", marginRight: "15px", marginLeft: "30px",
                                                                    marginTop: "1px", backgroundColor: "#A435EF", border: "2px solid white", color: "white"
                                                                }}
                                                            >
                                                                Add to cart</button>



                                                            <FavoriteBorderOutlinedIcon style={{ border: "1px solid black", borderRadius: "50%", height: "30px", width: "30px", padding: "8px", cursor: "pointer", marginTop: "-4px" }} />
                                                        </div>

                                                    </div>

                                                </Card>

                                            </Box>
                                            : null}
                                    </Box>

                                </SwiperSlide>
                            ))}

                        </Box>


                    </Swiper>
                </Box>
                {/* ))} */}

            </Grid>
        </div>
    )


}

export default Classroom;