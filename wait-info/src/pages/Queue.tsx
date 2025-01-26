import "./../App.css";

import WaitTime from "../components/WaitTime";
import PeopleAhead from "../components/PeopleAhead";
import Notif from "../components/Notif";
import { Divider } from "@mui/material";

const Queue = () => {
  return (
    <div>
      <h2 style={{ marginTop: "25px", marginBottom: "20px" }}>
        Waiting Status
      </h2>
      <div style={{ marginBottom: "15px" }}>
        <WaitTime time={"45 minutes"} />
      </div>
      <div style={{ marginBottom: "25px" }}>
        <PeopleAhead peopleAhead={"8"} />
      </div>
      <Divider flexItem />
      <h2 style={{ marginTop: "25px", marginBottom: "20px" }}>Notifications</h2>
      <div style={{ marginBottom: "15px" }}>
        <Notif
          time={"8:00 AM"}
          message={
            "You have been registered to the waiting list! Please wait for your turn to get treated."
          }
        />
      </div>
    </div>
  );
};

export default Queue;
