import React from "react";
import { Divider } from "@mui/material";
import "./WaitTime.css";

interface WaitTimeProps {
  time: string; // Time string, e.g., "45 minutes"
}

const WaitTime: React.FC<WaitTimeProps> = ({ time }) => {
  return (
    <div className="wait-time-container">
      <span className="wait-time-text">Estimated wait time</span>
      <Divider orientation="vertical" flexItem />
      <span className="wait-time-value">{time}</span>
    </div>
  );
};

export default WaitTime;
