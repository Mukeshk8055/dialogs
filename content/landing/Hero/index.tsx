import React from 'react';
import Typography from '@material-ui/core/Typography';
import {
  Grid, Button, Card, Box,
  // CardMedia,
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import leader from './leader.png';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
// import 'swiper/swiper.min.css';
// import 'swiper/components/navigation/navigation.scss';
// import 'swiper/components/pagination/pagination.scss';
import Course from './Course'
import Classroom from './classroom'
// import { autoPlay } from 'react-swipeable-views-utils';
// import SwipeableViews from 'react-swipeable-views';
// import { useTheme } from '@material-ui/core/styles';
import Footer from './Footer';
// import HoveringThreeCards from './HoveringThreeCards';
import './EinstonSlogan.css'
import './styles.css'

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
SwiperCore.use([Navigation, Pagination]);


function App() {
  // const theme = useTheme();
  // const [activeStep, setActiveStep] = React.useState(0);





  // const handleStepChange = (step: number) => {
  //   setActiveStep(step);
  // };


  // const data = [
  //   {
  //     title: "Autoplay",
  //     items: [
  //       {
  //         image:
  //           "https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png",
  //         name: "Animation",
  //         trainer: "Content Creator at Lghiven ",
  //         instruction: "Machine learning is the science of getting computers to act without being explicitly programmed science of getting computers to act without being explicitly programmed.",
  //       },
  //       {
  //         image:
  //           "https://thumbs.dreamstime.com/b/headshot-portrait-young-arabic-male-employee-glasses-pose-office-workplace-profile-picture-successful-confident-millennial-204985736.jpg",
  //         name: "James",
  //         trainer: "Content Creator at Lghiven",
  //         instruction: "Machine learning is the science of getting computers to act without being explicitly programmed science of getting computers to act without being explicitly programmed.",
  //       },
  //       {
  //         image:
  //           "https://thumbs.dreamstime.com/b/headshot-portrait-indian-female-employee-posing-office-smiling-look-camera-pose-profile-picture-happy-millennial-biracial-190186012.jpghttps://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png",
  //         name: "Lisa",
  //         trainer: "Content Creator at Lghiven ",
  //         instruction: "Machine learning is the science of getting computers to act without being explicitly programmed science of getting computers to act without being explicitly programmed.",
  //       },
  //       {
  //         image:
  //           "https://thumbs.dreamstime.com/b/headshot-portrait-smiling-caucasian-male-employee-headshot-portrait-young-caucasian-s-male-employee-glasses-posing-214574772.jpg",
  //         name: "Jhonson",
  //         trainer: "Content Creator at Lghiven",
  //         instruction: "Machine learning is the science of getting computers to act without being explicitly programmed science of getting computers to act without being explicitly programmed.",
  //       },

  //     ],
  //   },
  // ];





  // const classroomData = [

  //   {
  //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtq52k2itfQUrMgLZHE3Wa3Qe2F092LHegDetL2ulzx-gg0_zNGSzfQ8pgbafNN6dit-8&usqp=CAU",
  //     date: "24 Aug 2021",
  //     time: "1:30 PM ",
  //     title: "Machine Learning and Mechanism of Machine Science",
  //     skills: "Python,Panda,Numpy",
  //     trainer: "Mr.Sham",
  //     buy: "Buy Now",
  //     price: "₹999/-",
  //   },
  //   {
  //     image:
  //       "https://appsmaventech.com/images/blog/The-Evolution-Of-Web-Development-Via-Machine-Learning.jpg",
  //     date: "25 Aug 2021  ",
  //     time: "1:30 PM",
  //     title: "Computer Graphics and Animation Technology 2021",
  //     skills: "Python,Panda,Numpy",
  //     trainer: "Mrs.Seetha",
  //     buy: "Buy Now",
  //     price: "₹1000/-",
  //   },
  //   {
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR27g9Kr6c0J648vpP9-DBzk_rV3bkI51XQXQ&usqp=CAU",
  //     date: "26 Aug 2021",
  //     time: "1:30 PM ",
  //     title: "Python for Data Science and Data Structure Designs",
  //     skills: "Python,Panda,Numpy",
  //     trainer: "Mrs.Nirmala",
  //     buy: "Buy Now",
  //     price: "₹1499/-",
  //   },
  //   {
  //     image:
  //       "https://www.cs.wcupa.edu/schen/ss2020/pic/logo4.png",
  //     date: "27 Aug 2021",
  //     time: "1:30 PM ",
  //     title: " Data Science With Addition of Data Communication ",
  //     skills: "Python,Panda,Numpy",
  //     trainer: "Mr.Manoj",
  //     buy: "Free",
  //     price: "₹500",
  //   },
  //   {
  //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtq52k2itfQUrMgLZHE3Wa3Qe2F092LHegDetL2ulzx-gg0_zNGSzfQ8pgbafNN6dit-8&usqp=CAU",
  //     date: "24 Aug 2021",
  //     time: "1:30 PM ",
  //     title: "Machine Learning and Mechanism of Machine Science",
  //     skills: "Python,Panda,Numpy",
  //     trainer: "Mr.Sham",
  //     buy: "Buy Now",
  //     price: "₹999/-",
  //   },
  //   {
  //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtq52k2itfQUrMgLZHE3Wa3Qe2F092LHegDetL2ulzx-gg0_zNGSzfQ8pgbafNN6dit-8&usqp=CAU",
  //     date: "24 Aug 2021",
  //     time: "1:30 PM ",
  //     title: "Machine Learning and Mechanism of Machine Science",
  //     skills: "Python,Panda,Numpy",
  //     trainer: "Mr.Sham",
  //     buy: "Buy Now",
  //     price: "₹999/-",
  //   },
  //   {
  //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtq52k2itfQUrMgLZHE3Wa3Qe2F092LHegDetL2ulzx-gg0_zNGSzfQ8pgbafNN6dit-8&usqp=CAU",
  //     date: "24 Aug 2021",
  //     time: "1:30 PM ",
  //     title: "Machine Learning and Mechanism of Machine Science",
  //     skills: "Python,Panda,Numpy",
  //     trainer: "Mr.Sham",
  //     buy: "Buy Now",
  //     price: "₹999/-",
  //   },
  // ]

  // const hoverThreeData = [

  //   {
  //     image:
  //       "https://www.einfochips.com/blog/wp-content/uploads/2018/11/how-to-develop-machine-learning-applications-for-business-featured.jpg",
  //     title: "Einston Training",
  //     discription: "Einston training is a solution for developing impactful virtual trainings that keep learners engaged.",
  //     button: "+ Create Training",
  //     read: "Read more about training...",
  //     l1: "Machine Learning",
  //     l2: "Data Science",
  //     l3: "Network Desinging",
  //     list1: "VDI Training",
  //     list2: "Non-VDI Training",
  //     list3: "With Gamifiction"

  //   },
  //   {
  //     image:
  //       "https://images.squarespace-cdn.com/content/v1/5daddb33ee92bf44231c2fef/1586994429139-7FQY217XE8ZT7N4Z9QLH/bias-in-machine-learning.jpg?format=1000w",
  //     title: "Einston Webinar",
  //     discription: "Einston Webinar is a solution for developing impactful virtual trainings that keep learners engaged.",
  //     button: "+Create Webinar",
  //     read: "Read more about webinar...",
  //     l1: "Web Developement",
  //     l2: "Developement Design",
  //     l3: "Networking",
  //     list1: "Online Interaction",
  //     list2: "Face To Face Discussion",
  //     list3: "Online Webinar"

  //   },
  //   {
  //     image:
  //       "https://editor.analyticsvidhya.com/uploads/70332https___specials-images.forbesimg.com_dam_imageserve_966248982_960x0.jpg",
  //     title: "Einston Meeting",
  //     discription: "Einston Meeting is a solution for developing impactful virtual trainings that keep learners engaged.",
  //     button: "+ Create Meeting",
  //     read: "Read more about meeting...",
  //     l1: "Media Query",
  //     l2: "Material Design",
  //     l3: "Networking",
  //     list1: "Online Meeting",
  //     list2: "Discussions",
  //     list3: "Face to Face Meetings",

  //   },
  // ];








  return (
    <>

      <Grid container className="header">
        {/* <Header/> */}

      </Grid>



      <Grid container sx={{ mt: 3, mb: 3 }}>

        <div className="einston-slogan" style={{ display: "flex", height: "45vh", width: "100vw", justifyContent: "space-around" }}>
          <div className="einston-slogan-typography" style={{ display: "flex", flexDirection: "column", marginTop: "30px", marginLeft: "10%" }}>
            <Typography className="einston-slogan-tpOne" style={{ fontFamily: " SuisseWorks,Georgia,Times,times new roman,serif,apple color emoji,segoe ui emoji,segoe ui symbol", fontSize: "50px" }}>
              Bring your <Typography className="einston-slogan-tpTwo" style={{ fontFamily: " SuisseWorks,Georgia,Times,times new roman,serif,apple color emoji,segoe ui emoji,segoe ui symbol" }} fontSize="50px" color="primary" display="inline">Effort,
              </Typography><br></br> we will handle rest.
            </Typography>

            <Box className="einston-slogan-button">
              <Button color="primary" style={{
                height: "2.5rem",
                width: "45%",
                marginTop: "20px",
                // marginBottom:"200px",
                fontSize: "18px"
              }}
                variant="contained" component={RouterLink} to="/login">Get Started</Button>

            </Box>


          </div>
          <Card className="einston-slogan-image" style={{ width: "45%", height: "100%", marginLeft: "5%" }}>
            <img src={leader} alt="einstonimage" style={{ width: "100%", height: "100%" }}
            />

          </Card>

        </div>

      </Grid>
      {/* classroomData={classroomData} */}
      <Grid container className="Classroom">
        <Classroom />
      </Grid>


      <Grid container className="Courses">

        <Course />

      </Grid>


{/* 
      <Grid container className="training">
        <HoveringThreeCards hoverCards={hoverThreeData} />

      </Grid> */}



      {/* <Box className="Customer-review-container"
        style={{
          width: "100vw",
          marginTop: "50px",
          marginBottom: "70px",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",

        }}>

        <Typography className="customer-review-typography"

          style={{
            fontSize: "32px",
            color: "#141414",

            fontFamily: "SuisseWorks,Georgia,Times,times new roman,serif,apple color emoji,segoe ui emoji,segoe ui symbol"
          }}>
          Our Customer Feedback! </Typography>
        {data.map((item, id) => (
          <div className="Customer-review-box">
            <Box
              style={{

                paddingLeft: "30%",
                display: "flex",
                width: "80%",
                paddingBottom: "5%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
              >
                {item.items.map((element, id) => (
                  <Card
                    className="customer-review-card"
                    style={{ 
                      // border: "2px solid blue",
                       display: "flex",alignItems: "center",width: "80%", height: "auto",padding:"5%" }}
                  >
                    <Box
                      style={{
                        // border: "2px solid yellow",


                        marginBottom: "20px",
                        // width: '0px', height: '80px', 
                      }}
                    >
                      <CardMedia
                        style={{
                          padding: '65px', borderRadius: "5%"
                        }}
                        image={element.image}
                      />
                    </Box>
                    <div
                      className="customer-review-inner-card"

                      style={{ 
                        // border: "2px solid red", 
                        marginLeft: "10px", marginTop: "0px", padding: "0px", display: "flex", alignItems: "center", flexDirection: "column", }}
                    >
                      <Typography style={{ marginLeft: "0px" }}>
                        <h4>{element.name}</h4>
                        <h4>{element.trainer}</h4>
                        <p>{element.instruction}
                        </p>
                      </Typography>
                    </div>


                  </Card>
                ))}
              </AutoPlaySwipeableViews>
            </Box>
          </div>
        ))}
      </Box> */}



      <Footer />
    </>
  );
}
export default App