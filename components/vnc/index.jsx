import React, { useEffect, useState,useRef } from 'react';
import RFB from '@novnc/novnc'

const VNCComponent = (props) => {

    const [RFBRef, setRFBRef] = useState(null);
    const [,setConnectionStatus]=useState("Disconnected");
    const canvasRef = useRef(null);


    useEffect(() => {
        if (RFBRef == null) {
            connect()
        }
        return disconnect
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const returnPass = (rfb)=>{
        rfb.sendCredentials({"password":props.password})
    }

    const connect = () => {
        if (RFBRef!==null){
            return
        }
        disconnect()
        setConnectionStatus("Connecting");
        if (canvasRef.current==null) {
            console.log("Canvas Reference Not Set");
            return;
        }
       // const url="ws://94.237.67.32:5800/websockify"
        try{
        const rfb=new RFB(canvasRef.current, props.url, {shared: true,reconnect: true, reconnect_delay: 500});
        setRFBRef(rfb)
        rfb.addEventListener('securityfailure', ()=>console.log("Security Failure"));
        rfb.addEventListener('connect', ()=>onConnect(rfb))
        rfb.addEventListener('disconnect', ()=>onDisconnected())
        rfb.addEventListener('credentialsrequired',()=>returnPass(rfb))
        }
        catch(e){
            setConnectionStatus("Failed to Connect");
            console.log("Failed Creating the client")
        }
    }

    const onDisconnected = ()=>{
        console.log("Disconnected");
        setConnectionStatus("Disconnected")
        setRFBRef(null)
        connect()
    }

    const onConnect =(rfb)=>{
        rfb.scaleViewport=true
        rfb.compressionLevel=9
        rfb.resizeSession=true
        rfb.showDotCursor=true
        setConnectionStatus("Connected");
        console.log("Connected to target");
    }

    const disconnect = () => {
        if (RFBRef != null) {
            RFBRef.disconnect();
            setRFBRef(null);
        }
    }

    const onMouseEnter = () => {
        if (RFBRef!==null){
            RFBRef.focus()
        } 
    }

    const onMouseLeave = ()=>{
        if (RFBRef!==null){
            RFBRef.blur()
        } 
    }


    return (
        <div
        style={{width:'auto',"height":'100%'}}
            ref={canvasRef}
   
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        />
    
    )


}

export default VNCComponent;
