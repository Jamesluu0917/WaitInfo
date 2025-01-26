import "./../App.css";

import React from "react";
import WaitTime from "../components/WaitTime";
import PatientsTable from "../components/PatientsTable";
import PeopleAhead from "../components/PeopleAhead";
import Notif from "../components/Notif";

const Queue = () => {
  return (
    <div className="p-4">
      <Notif
        time={"8:00 AM"}
        message={
          "You have been registered to the waiting list! Please wait for your turn to get treated."
        }
      />
    </div>
  );
};

export default Queue;
