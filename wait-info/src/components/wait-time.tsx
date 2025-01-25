import React from "react";
import Divider from "@mui/material/Divider";

interface WaitTimeProps {
  time: string; // Time string, e.g., "45 minutes"
}

const WaitTime: React.FC<WaitTimeProps> = ({ time }) => {
  return (
    <div className="flex items-center px-6 py-4 bg-gray-50 border border-gray-300 rounded-lg shadow">
      <span className="text-gray-800 text-lg font-medium mr-4">
        Estimated wait time
      </span>
      <Divider
        orientation="vertical"
        flexItem
        className="mx-4 border-gray-300"
      />
      <span className="text-blue-600 text-lg font-semibold">{time}</span>
    </div>
  );
};

export default WaitTime;
