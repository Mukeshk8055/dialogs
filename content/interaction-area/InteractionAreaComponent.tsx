/*
 * InteractionAreaComponent is responsible mounting applications, editors, videotiles
 */
import "./InteractionAreaComponent.css";
import VNCComponent from "src/components/vnc";

const InteractionAreaComponent = () => {


  return (
    <>
      <div className="" style={{ marginBottom: "5%", backgroundColor:'yellow', height:'100%' }}>
      <VNCComponent url={"wss://94.237.73.101:5800?token=abcd"} password={"1000"} />
      </div>
    </>
  );
};

export default InteractionAreaComponent;
