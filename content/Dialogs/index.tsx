// import { Button } from "@material-ui/core";
// import React, { useState, useEffect } from "react";
// import DialogComponent from "./Results";
// import Expands from "./Expand";
// import { RootState } from "src/store";
// import { useDispatch, useSelector } from "react-redux";
// import { OpenDialog } from "src/slices/Dialogs";
// import {
//   deletedialoginfo,
//   subsectioninfo,
//   addsubsectioninfo,
// } from "src/slices/deletedialogs";
// import Deldialogs from "../Dialogs/Deldialog";
// // import { Object } from "prop-types";

// function Index() {
//   const dispatch = useDispatch();
//   const { Opendialog } = useSelector((state: RootState) => state.dialogsdata);
//   const { deletedialog } = useSelector(
//     (state: RootState) => state.deletedialog
//   );
//   // const { addsubsection } = useSelector(
//   //   (state: RootState) => state.addsubsection
//   // );
//   const { subsection } = useSelector((state: RootState) => state.subsection);
//   const [cardHover, setCardHover] = useState(undefined);
//   const [cardHovertopic, setCardHovertopic] = useState(undefined);

//   useEffect(() => {
//     dispatch(addsubsectioninfo(state));
//   });

//   // console.log("addsubsection", addsubsection);

//   const handleClickOpen = (id) => {
//     const data = {
//       value: true,
//       id: id,
//     };
//     dispatch(subsectioninfo(data));
//   };

//   const handleClickOpen1 = (id) => {
//     const data = {
//       value: true,
//       id: id,
//     };
//     dispatch(deletedialoginfo(data));
//   };

//   const handleClose2 = () => {
//     const data = {
//       value: false,
//       id: null,
//     };
//     dispatch(subsectioninfo(data));
//   };

//   const handleClose1 = () => {
//     const data = {
//       value: false,
//       id: null,
//     };
//     dispatch(deletedialoginfo(data));
//   };

//   const [state, setstate] = useState({
//     name: "syllabus name",
//     description: "python is simple programing language",
//     sections: [
//       {
//         id: 1,
//         expand: true,
//         name: "Chapter 1",
//         description: "description",
//         type: "url of media",
//         subSection: [],
//       },
//       {
//         id: 2,
//         expand: true,
//         name: "Chapter 2",
//         description: "description",
//         type: "url of media",
//         subSection: [],
//       },
//     ],
//     createdBy: "bob",
//     createdDate: "2021-10-21T08:31:13.974599",
//   });

//   console.log("state", state);
//   const onDelete = (id) => {
//     let deleteData = Object.values(state.sections).map((item) => {
//       return {
//         ...item,
//         subSection: item.subSection.filter((item1) => item1.id !== id),
//       };
//     });

//     setstate({ ...state, sections: deleteData });
//   };

//   const handleDeleteMain = (id) => {
//     const handledeletesection = Object.values(state.sections).filter(
//       (item1, i) => item1["id"] !== id
//     );
//     setstate({ ...state, sections: handledeletesection });
  
//   };

//   const handleAddtopic = (id) => {
//     const newData = Object.values(state.sections).map((item, i) => {
//       console.log("456", item);
//       return id === i ? { ...item, expand: !item.expand } : { ...item };
//     });
//     setstate({ ...state, sections: newData });
//   };

//   const addMore = (id1) => {
//     // console.log("id1", id1);
//     let clicked = state.sections[id1];
//     clicked = {
//       ...clicked,
//       subSection: [
//         ...clicked.subSection,
//         {
//           id: `${id1 + 1}.${clicked.subSection.length + 1}`,
//           topicname: `Topic ${clicked.subSection.length + 1}`,
//         },
//       ],
//     };
//     let tempState = state.sections;
//     tempState[id1] = clicked;
//     setstate((prevstate) => ({
//       ...prevstate,
//       subSection: [tempState],
//     }));
//     // dispatch(addsubsectioninfo(state));
//   };

//   const handleClickOpensyllabus = () => {
//     const data = {
//       value: true,
//     };
//     dispatch(OpenDialog(data));
//   };

//   const handleClose = () => {
//     const data = {
//       value: false,
//     };
//     dispatch(OpenDialog(data));
//   };

//   return (
//     <div>
//       <Button
//         style={{ margin: "20px" }}
//         variant="contained"
//         color="primary"
//         onClick={() => handleClickOpensyllabus()}
//       >
//         Add Syllabus
//       </Button>

//       <DialogComponent
//         open={Opendialog.value}
//         setOpen={Opendialog.value}
//         handleClose={handleClose}
//       />

//       <Deldialogs
//         //subsections
//         open={subsection.value}
//         handleClose2={handleClose2}
//         onDelete={onDelete}
//         button={subsection.id}
//         //sections
//         open1={deletedialog.value}
//         handleClose1={handleClose1}
//         handleDeleteMain={handleDeleteMain}
//         button1={deletedialog.id}
//       />

//       <Expands
//         state={state}
//         setCardHover={setCardHover}
//         cardHover={cardHover}
//         handleClickOpen1={handleClickOpen1}
//         handleAddtopic={handleAddtopic}
//         addMore={addMore}
//         setCardHovertopic={setCardHovertopic}
//         cardHovertopic={cardHovertopic}
//         handleClickOpen={handleClickOpen}
//       />
//     </div>
//   );
// }

// export default Index;
