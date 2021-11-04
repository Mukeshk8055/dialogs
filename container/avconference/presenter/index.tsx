/*
 *  The Container is responsible for handling the operations of Picture in Picture representation
 *  of trainer sharing unit
 *
 *  The component must be loaded at the default position for the first time entry of the user.
 *  On subsequent change of positions in the same system (probably the resolution), the user must
 *  continue from the same location where he/she had left, ie. each of the positional changes must be
 *  recorded in the participant collection of the database.
 *
 *  The presentation component will be containing the common toolbar on hover at the top side
 *  and training special action tool bar at the bottom. The aspect ratio must be fixed to the
 *  remote stream.
 *
 *  The training special action tool bar might contain the following
 *  - Screenshot
 *  - Sylabus View
 *  - Question
 *  - Open Notes
 */
import { Paper } from "@material-ui/core";
import { useState } from "react";
import PictureInPicture from "src/components/PictureInPicture";
import VNCComponent from "src/components/vnc";
import ScreenshotIcon from '@material-ui/icons/Screenshot'

const PresenterContainer = () => {
  const [show, setShow] = useState(false)
  return (
    <div onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
      <PictureInPicture  minimize={false} minHeight={375} minWidth={600}>
        <div style={{ height: "100%", width: "100%" }}>
          <VNCComponent
            url={"wss://94.237.73.101:5800?token=abcd"}
            password={"1000"}
          />
          {show?<Paper style={{position:"absolute", width:'95%', bottom:10, margin:'auto', left:0, right:0 }}>
            TOOLBAR
          </Paper>:null}
          {show?<Paper style={{position:"absolute", width:'95%', top:10, margin:'auto', left:0, right:0}}>
          <ScreenshotIcon onClick={()=>alert("Screenshot taken")}/>
          </Paper>:null}
        </div>
      </PictureInPicture>
    </div>
  );
};

export default PresenterContainer;
