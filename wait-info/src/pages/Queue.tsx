import "./../App.css";

import React from "react";
import WaitTime from "../components/WaitTime";
import AddPatientPopup from "../components/AddPatientPopup";

const Queue = () => {
  return (
    <div className="p-4">
      <AddPatientPopup />
    </div>
  );
};

export default Queue;
