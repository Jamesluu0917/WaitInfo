import "./../App.css";

import React from "react";
import WaitTime from "../components/WaitTime";

const Queue = () => {
  return (
    <div className="p-4">
      <WaitTime time="45 minutes" />
    </div>
  );
};

export default Queue;
