// import React from "react";
// import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
// import Dialog from "@material-ui/core/Dialog";
// import ListItemText from "@material-ui/core/ListItemText";
// import ListItem from "@material-ui/core/ListItem";
// import List from "@material-ui/core/List";
// import Divider from "@material-ui/core/Divider";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";
// import CloseIcon from "@material-ui/icons/Close";
// import Slide from "@material-ui/core/Slide";
// import { TransitionProps } from "@material-ui/core/transitions";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     appBar: {
//       position: "relative",
//     },
//     title: {
//       marginLeft: theme.spacing(2),
//       flex: 1,
//     },
//   })
// );

// const Transition = React.forwardRef(function Transition(
//   props: TransitionProps & { children?: React.ReactElement },
//   ref: React.Ref<unknown>
// ) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

// const Dialogs = ({ open, setOpen, handleClose }) => {
//   const classes = useStyles();
//   return (
//     <div>
//       <Dialog
//         fullScreen
//         open={open}
//         onClose={() => setOpen(false)}
//         TransitionComponent={Transition}
//       >
//         <AppBar className={classes.appBar}>
//           <Toolbar>
//             <IconButton edge="start" color="inherit" aria-label="close">
//               <CloseIcon onClick={() => handleClose()} />
//             </IconButton>
//             <Typography variant="h6" className={classes.title}></Typography>
//           </Toolbar>
//         </AppBar>
//         <List>
//           <ListItem button>
//             <ListItemText />
//           </ListItem>
//           <Divider />
//           <ListItem button></ListItem>
//         </List>
//       </Dialog>
//     </div>
//   );
// };
// export default Dialogs;
