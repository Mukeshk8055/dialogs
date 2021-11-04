import React, { useState, useEffect } from 'react'
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import { experimentalStyled } from '@material-ui/core/styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import Rating from '@material-ui/lab/Rating';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import ArrowLeftOutlinedIcon from '@material-ui/icons/ArrowLeftOutlined';
// import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import {
  Grid, Card, Box,
  Typography,
} from '@material-ui/core';
import CheckIcon from '@mui/icons-material/Check';

import './course.css';
import axios from 'axios';
import { courseData } from './InterfaceCourse';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';


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


function Course() {

  const [cardHover, setCardHover] = useState(undefined);


  const [data, setData] = useState<courseData[]>([]);
  // const[wishlist,setwishlist]=useState<boolean>(false);

  useEffect(() => {
    async function fetchMyAPI() {
      const response = await axios.get("https://api.einstonlabs.com/api/v1/event/");
      console.log(response.data.data)
      setData(response.data.data);

    }

    fetchMyAPI()

  }, [])



  // const dummyData = [
  //   {
  //     title: "Courses for you",
  //     items: [
  //       {
  //         id: 0,
  //         image:
  //           "https://www.einfochips.com/blog/wp-content/uploads/2018/11/how-to-develop-machine-learning-applications-for-business-featured.jpg",
  //         title: "Animation in Computer Graphics Machine Learning 2020",
  //         skills: "Python,Panda,Numpy",
  //         trainer: "Mr.Vikram kumar",
  //         buy: "Buy Now",
  //         price: "₹1000/-",
  //         rating: "2.5",
  //         count: "(1,400)"
  //       },
  //       {
  //         id: 1,
  //         image:
  //           "https://images.squarespace-cdn.com/content/v1/5daddb33ee92bf44231c2fef/1586994429139-7FQY217XE8ZT7N4Z9QLH/bias-in-machine-learning.jpg?format=1000w",
  //         title: "Automation in Robotic Technology Machine Learning 2020",
  //         skills: "Python,Panda,Numpy",
  //         trainer: "Mr.Nandhu",
  //         buy: "Buy Now",
  //         price: "₹1000/-",
  //         rating: "3.5",
  //         count: "(1,500)"
  //       },
  //       {
  //         id: 2,
  //         image:
  //           "https://editor.analyticsvidhya.com/uploads/70332https___specials-images.forbesimg.com_dam_imageserve_966248982_960x0.jpg",
  //         title: "Data Science in Computer Environment Machine Learning 2020",
  //         skills: "Python,Panda,Numpy",
  //         trainer: "Mrs.Swetha",
  //         buy: "Buy Now",
  //         price: "₹1000/-",
  //         rating: "3",
  //         count: "(1,600)"
  //       },
  //       {
  //         id: 3,
  //         image:
  //           "https://www.simplilearn.com/ice9/free_resources_article_thumb/Deep-Learning-vs-Machine-Learning.jpg",
  //         title: "Python for data science and Machine Learning Machine Learning 2020",
  //         skills: "Python,Panda,Numpy",
  //         trainer: "Mr.Nikil Chand",
  //         buy: "Buy Now",
  //         price: "₹1000/-",
  //         rating: "3.5",
  //         count: "(2,400)"
  //       },
  //       {
  //         id: 4,
  //         image:
  //           "https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png",
  //         title: "Python for data science and Robotic Technology Machine Learning 2020",
  //         skills: "Python,Panda,Numpy",
  //         trainer: "Mr.Nikil Chand",
  //         buy: "Free",
  //         price: "Enroll",
  //         rating: "2.5",
  //         count: "(1,900)"
  //       },
  //       {
  //         id: 5,
  //         image:
  //           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR27g9Kr6c0J648vpP9-DBzk_rV3bkI51XQXQ&usqp=CAU",
  //         title: "Angular JavaScript and Angular TypeScript Machine Learning 2020",

  //         skills: "Python,Panda,Numpy",
  //         trainer: "Mr.Chand",
  //         buy: "Buy Now",
  //         price: "₹1000/-",
  //         rating: "",
  //         count: "(2,000)"
  //       },
  //       {
  //         id: 6,
  //         image:
  //           "https://www.cs.wcupa.edu/schen/ss2020/pic/logo4.png",
  //         title: "React for Intergation of Reusable Components Machine Learning 2020",
  //         skills: "Python,Panda,Numpy",
  //         trainer: "Mr.Sham",
  //         buy: "Buy Now",
  //         price: "₹1000/-",
  //         rating: "3.5",
  //         count: "(1,900)"
  //       },
  //       {
  //         id: 7,
  //         image:
  //           "https://www.codemithra.com/wp-content/uploads/2020/09/web-design-development-blog-2.jpg",
  //         title: "Data Structure Machine Learning 2020",
  //         hovering: "  Machine Learning 2020: Complete Maths for Machine Learning ",
  //         skills: "Python,Panda,Numpy",
  //         trainer: "Mr.James",
  //         buy: "Free",
  //         price: "Enroll",
  //         rating: "2.5",
  //         count: "(2,400)"
  //       },
  //       {
  //         id: 8,
  //         image:
  //           "https://www.codemithra.com/wp-content/uploads/2020/09/web-design-development-blog-2.jpg",
  //         title: "Data Structure Machine Learning 2020",
  //         hovering: "  Machine Learning 2020: Complete Maths for Machine Learning ",
  //         skills: "Python,Panda,Numpy",
  //         trainer: "Mr.James",
  //         buy: "Free",
  //         price: "Enroll",
  //         rating: "2.5",
  //         count: "(2,400)"
  //       },
  //       {
  //         id: 9,
  //         image:
  //           "https://www.codemithra.com/wp-content/uploads/2020/09/web-design-development-blog-2.jpg",
  //         title: "Data Structure Machine Learning 2020",
  //         hovering: "  Machine Learning 2020: Complete Maths for Machine Learning ",
  //         skills: "Python,Panda,Numpy",
  //         trainer: "Mr.James",
  //         buy: "Free",
  //         price: "Enroll",
  //         rating: "2.5",
  //         count: "(2,400)",
  //         title1: "",
  //       },
  //     ],
  //   },
  // ];





  return (
    <div>

      <Grid container display="flex" flexWrap="wrap" >

        {/* {data.map((item, id) => ( */}
        <Box className="course-container"
          sx={{
            backgroundColor: "#F5F8FB"
            // ,border:"2px solid"
          }}
        // onMouseLeave={()=>setCardConatiner(undefined)}
        >




          <span className="course-card-title">

            Course</span>

          {/*  border: "2px solid" */}

          <Typography className="course-card-subtitle" style={{ marginLeft: "30px" }} >
            Skills for your present (and your future). Get started with us.</Typography>

          <Swiper
            className="mySwiper"
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


            <div style={{}}>

              {data.length && data.map((element, id) => (
                <SwiperSlide key={id}>

                  <Box onMouseLeave={() => setCardHover(undefined)} className="course-all-contain" style={{ marginTop: "50px" }}>

                    <Box
                      className="card-only-box"
                      // element.id
                      onMouseEnter={() => setCardHover(id)}
                    // onMouseOut={() => setCardHover(undefined)}



                    >
                      <Box className="course-image">
                        {/* {element.image}  */}
                        <img src="https://picsum.photos/200/300?grayscale" style={{ width: "235px", height: "145px" }} alt="courseImage" ></img>

                      </Box>

                      <Box className="course-overview-conatin">
                        <TypeTextTitle className="course-conatin-title" sx={{ fontWeight: "bold" }}
                        >
                          {element.topic}</TypeTextTitle>

                        <Typography className="course-trainer">
                          {element.organizedBy}</Typography>

                        <div className="rating-container" style={{ display: "flex" }}>
                          <Typography className="rating-container-number"   > <span>{element.rating}</span>
                          </Typography>
                          <Rating className="rating-container-star" size="small" name="read-only" value={element.rating} readOnly></Rating>
                          <span style={{ marginLeft: "5px" }}>{element.enrolledParticipants}</span>
                        </div>

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

                        {element.badge ?
                          <span style={{ backgroundColor: "#ECEB98", paddingLeft: "3px", paddingRight: "3px", paddingTop: "2px", paddingBottom: "2px" }} >{element.badge} </span> : null}
                      </Box>
                    </Box>





                    {cardHover === id ?
                      <Box className="hover-card" >
                        <Card

                          variant="outlined"

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

                          // style={{
                          //   width: "340px",
                          //   height: "auto",
                          //   marginLeft: "281px",
                          //   position: "absolute",
                          //   top: "0px",
                          //   // border:"2px solid ",
                          //   overflow: "visible",
                          //   zIndex: 99
                          // }}

                          // style={cardHover === 3 || cardHover === 4 || cardHover === 8 || cardHover === 9 ? {
                          //   width: "340px",
                          //   // border:"2px solid",
                          //   // backgroundColor:"#E0E0E0", 
                          //   height: "460px",
                          //   marginLeft: "-342px",
                          //   // marginBottom: "100px",
                          //   position: "absolute",
                          //   top: "0px",
                          //   overflow: "visible",
                          //   zIndex: 99,
                          //  } : {
                          //   width: "340px",
                          //   height: "460px",
                          //   marginLeft: "281px",
                          //   position: "absolute",
                          //   top: "0px",
                          //   // border:"2px solid ",
                          //   overflow: "visible",
                          //   zIndex: 99
                          // }}
                          onMouseLeave={() => setCardHover(undefined)}
                        // onMouseOut={() => setCardHover(undefined)}
                        >



                          <div style={{ marginRight: "15px", marginLeft: "15px", marginBottom: "15px" }}>
                            <div className="arrow">
                              {cardHover === 3 || cardHover === 8 || cardHover === 9 || cardHover === 4 ? <ArrowRightIcon className="arrowLeft"
                                style={{ height: "22%", width: "40%", padding: "3px", color: "#E0E0E0", marginLeft: "261px", marginTop: "110px", position: "absolute", zIndex: 99 }} />
                                : <ArrowLeftOutlinedIcon className="arrowRight"
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




                            {/* <p style={{}}>{element.description}</p>


                            <ul style={{ color: "#1C1D1F",lineHeight:"150%" }}>
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
            </div>

          </Swiper>

        </Box>
        {/* // ))} */}

      </Grid >

    </div >
  )
}
export default Course