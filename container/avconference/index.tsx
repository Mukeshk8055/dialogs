/*
 *   AV Conference Container utilized for loading the event and is an entrypoint
 */

/*
Process Definition and Expectation
Step 1:
As the page loads, we need to verify if the user is an authenticated (protected route), if the user is not 
authenticated then he/she must be redirected to the login page, post login he/she must be redirected
to the current original page. if the user is authenticated, then
1) Event information must be fetched, 
   a) if the event is invalid then a prompt must be shown saying,
   the event does not exist/ is an private event, give an button to move back to the dashboard. Either 
   you close the dialog or click on dashboard, you must be redirected to the events page in your dashboard.
   b) if the event is valid, then verify if the participant is allowed for the event (Participant Collection).
       i)  if the participant is registered for the meeting and has been allowe , which is verified by the participant collection
           then Step 2 begins
       ii) if the participant is registered but not allowed yet, then waiting screen must be shown until the person is allowed.
           the trainer or the host must get a notification that a user wanted to join.


Step 2: On the valid event and valid participant
1) Media Server Registration Flow and Joining the Room
2) Toolbar Population based on type of meeting
3) Event Registration
   1) if the user is not registered to the MQTT event server, then the connection must be established and process the next step
   2) if the user is registered with the MQTT server, then the respective subscriptions must be activated.
        i) Includes the following
          a) messaging
          b) applicaton
          c) gamification
          d) affirmations
*/

import AVConference from "src/content/avconference";

const AVConferenceContainer = () => {
  return <AVConference />;
};

export default AVConferenceContainer;
