// import { Card, Tooltip, Typography } from "@material-ui/core";
// import React from "react";
// import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
// import AddCircleOutlineRoundedIcon from "@material-ui/icons/AddCircleOutlineRounded";
// import EditRoundedIcon from "@material-ui/icons/EditRounded";
// import RemoveCircleOutlineRoundedIcon from "@material-ui/icons/RemoveCircleOutlineRounded";
// import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

// const Expands = ({
//   state,
//   setCardHover,
//   cardHover,
//   handleClickOpen1,
//   handleAddtopic,
//   addMore,
//   setCardHovertopic,
//   cardHovertopic,
//   handleClickOpen,
// }) => {
//   return (
//     <div>
//       {Object.values(state.sections).map((item, i) => {
//         console.log("item", item);
//         return (
//           <>
//             <Card
//               onMouseLeave={() => setCardHover(undefined)}
//               onMouseEnter={() => setCardHover(i)}
//               style={{ margin: "20px" }}
//             >
//               <div
//                 style={{
//                   display: "flex",
//                   flexDirection: "row",
//                   justifyContent: "space-between",
//                 }}
//               >
//                 <div
//                   style={{
//                     display: "flex",
//                     flexDirection: "row",
//                     padding: "15px",
//                   }}
//                 >
//                   <CalendarViewDayIcon style={{ margin: "10px" }} />
//                   <Typography style={{ marginTop: "13px" }}>
//                     {item["name"]}
//                   </Typography>
//                 </div>

//                 {cardHover === i ? (
//                   <div style={{ float: "right", margin: "20px" }}>
//                     <Tooltip title="Add">
//                       <AddCircleOutlineRoundedIcon
//                         onClick={() => addMore(i)}
//                         style={{ margin: "7px" }}
//                       />
//                     </Tooltip>
//                     <Tooltip title="Edit">
//                       <EditRoundedIcon style={{ margin: "7px" }} />
//                     </Tooltip>
//                     <Tooltip title="Delete">
//                       <RemoveCircleOutlineRoundedIcon
//                         onClick={() => {
//                           handleClickOpen1(item["id"]);
//                         }}
//                         style={{ margin: "7px" }}
//                       />
//                     </Tooltip>
//                     <Tooltip title="Expand">
//                       <ExpandMoreOutlinedIcon
//                         onClick={() => handleAddtopic(i)}
//                         style={{ margin: "7px" }}
//                       />
//                     </Tooltip>
//                   </div>
//                 ) : null}
//               </div>
//             </Card>

//             {item["subSection"].map((item1, id) => {
//               if (item["expand"] === true) {
//                 return (
//                   <Card
//                     onMouseLeave={() => setCardHovertopic(undefined)}
//                     onMouseEnter={() => setCardHovertopic(item1.id)}
//                     style={{
//                       margin: "20px",
//                       marginTop: "-15px",
//                       marginLeft: "50px",
//                     }}
//                   >
//                     <div
//                       style={{
//                         display: "flex",
//                         flexDirection: "row",
//                         justifyContent: "space-between",
//                       }}
//                     >
//                       <div style={{ display: "flex", flexDirection: "row" }}>
//                         <CalendarViewDayIcon style={{ margin: "10px" }} />
//                         <Typography style={{ padding: "10px" }}>
//                           {item1.id}

//                           {item1.topicname}
//                         </Typography>
//                       </div>

//                       {cardHovertopic === item1.id ? (
//                         <div
//                           onMouseLeave={() => setCardHovertopic(undefined)}
//                           onMouseEnter={() => setCardHovertopic(item1.id)}
//                           style={{ float: "right" }}
//                         >
//                           <Tooltip title="Edit">
//                             <EditRoundedIcon style={{ margin: "7px" }} />
//                           </Tooltip>
//                           <Tooltip title="Delete">
//                             <RemoveCircleOutlineRoundedIcon
//                               onClick={() => {
//                                 handleClickOpen(item1.id);
//                               }}
//                               style={{ margin: "7px" }}
//                             />
//                           </Tooltip>
//                         </div>
//                       ) : null}
//                     </div>
//                   </Card>
//                 );
//               } else return null;
//             })}
//           </>
//         );
//       })}
//     </div>
//   );
// };

// export default Expands;
