// import React from "react";
// import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import { Button } from "@material-ui/core";

// function Deldialog({
//   open,
//   handleClose2,
//   onDelete,
//   button,
//   open1,
//   handleClose1,
//   handleDeleteMain,
//   button1,
// }) {
//   return (
//     <div>
//       <div>
//         <Dialog
//           open={open}
//           onClose={handleClose2}
//           aria-labelledby="alert-dialog-title"
//           aria-describedby="alert-dialog-description"
//         >
//           <DialogContent>
//             <DialogContentText
//               style={{ fontSize: "18px" }}
//               id="alert-dialog-description"
//             >
//               Are you sure do you want to delete ?
//             </DialogContentText>
//           </DialogContent>
//           <DialogActions>
//             <Button
//               onClick={() => {
//                 onDelete(button);
//                 handleClose2();
//               }}
//               color="primary"
//             >
//               Yes
//             </Button>
//             <Button onClick={handleClose2} color="primary" autoFocus>
//               No
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </div>

//       <div>
//         <Dialog
//           open={open1}
//           onClose={handleClose1}
//           aria-labelledby="alert-dialog-title"
//           aria-describedby="alert-dialog-description"
//         >
//           <DialogContent>
//             <DialogContentText
//               style={{ fontSize: "18px" }}
//               id="alert-dialog-description"
//             >
//               Are you sure do you want to delete ?
//             </DialogContentText>
//           </DialogContent>
//           <DialogActions>
//             <Button
//               onClick={() => {
//                 handleDeleteMain(button1);
//                 handleClose1();
//               }}
//               color="primary"
//             >
//               Yes
//             </Button>
//             <Button onClick={handleClose1} color="primary" autoFocus>
//               No
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </div>
//     </div>
//   );
// }

// export default Deldialog;
