import ContentWrapper from "src/components/ContentWrapper";
import InteractionAreaContainer from "src/container/avconference/interaction-area";
import CommunicatorContainer from "src/container/avconference/communicator";
import "./index.css";
import PresenterContainer from "src/container/avconference/presenter";
import ToolBarComponent from "src/content/avconference/toolbar";

function AVConference() {
  return (
    <>
      <ContentWrapper title="AVConference">
        <div className="avContainer">
          <ToolBarComponent />
          <PresenterContainer />
          <CommunicatorContainer />
          <div className="avInteractionAreaContainer">
            <InteractionAreaContainer />
          </div>
          {false ? (
            <div className="avCommunicatorSideContainer">Chat Container</div>
          ) : null}
        </div>
      </ContentWrapper>
    </>
  );
}

export default AVConference;
