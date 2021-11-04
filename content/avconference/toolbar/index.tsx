import {useState} from 'react';
import ChatIcon from '@material-ui/icons/ForumRounded'
import Screenshare from '@material-ui/icons/ScreenShare'
import { IconButton, Paper, Tooltip } from '@material-ui/core';
import Mute from '@material-ui/icons/MicOffRounded'
import VDIIcon from '@material-ui/icons/DesktopMac'
import FullScreen from '@material-ui/icons/Fullscreen'
import Grow from '@material-ui/core/Grow';


const ToolBarComponent = (props) => {
    const [VDIoptions,setVDIOptions]=useState(false);
    return (
        <Grow in={true}
            style={{ transformOrigin: '0 0 0' }}
            {...(true ? { timeout: 1000 } : {})}
        ><Paper onMouseLeave={props.onToolBarClose} style={{
            position: 'absolute',
            display: 'flex',
            flexDirection: 'row',
            left: '50%',
            top: 25,
            transform: 'translate(-50%, -50%)'
        }}>
                <Paper elevation={7} style={{ margin: '5px' }}>
                    <Tooltip title="Presenter">
                        <IconButton>
                            <Screenshare  />
                        </IconButton>
                    </Tooltip>
                    {/* <Tooltip title="Participants">
                        <IconButton onClick={props.openParticipantWindow}>
                            <ContactIcon />
                        </IconButton>
                    </Tooltip> */}
                    <Tooltip title="Communicator">
                        <IconButton onClick={props.openChatWindow}>
                            <ChatIcon />
                        </IconButton>
                    </Tooltip>
                </Paper>
                <Paper elevation={7} style={{ margin: '5px' }}>
                    <Tooltip title="Mute/Unmute">
                        <IconButton>
                            <Mute style={{ color: 'red' }} />
                        </IconButton>
                    </Tooltip>
                 

                    <Tooltip title="FullScreen">
                        <IconButton>
                            <FullScreen />
                        </IconButton>
                    </Tooltip>
                </Paper>
                <Paper elevation={7} style={{ margin: '5px' }}>
                    
                       {!VDIoptions?<Tooltip title="Windows Desktop 1"><IconButton onClick={()=>setVDIOptions(true)}>
                            <VDIIcon />
                        </IconButton></Tooltip>:
                        <Paper>
                        <IconButton>
                            <VDIIcon />
                        </IconButton>
                        <IconButton>
                            <VDIIcon />
                        </IconButton>
                        <IconButton>
                            <VDIIcon />
                        </IconButton>
                        </Paper>}
                      
          
                    <Tooltip title="Linux Debain 1">
                        <IconButton>
                            <VDIIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="VSCode 1">
                        <IconButton>
                            <VDIIcon />
                        </IconButton>
                    </Tooltip>
                </Paper>
            </Paper></Grow>
    )
}

ToolBarComponent.defaultProps = {
    "onToolBarClose" : ()=>console.log("Tool Bar Close Event Triggered")
}
export default ToolBarComponent;