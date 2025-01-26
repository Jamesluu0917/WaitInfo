import React from "react";
import "./Notif.css";

interface NotifProps {
  time: string;
  message: string; // message, e.g., "called"
}

const Notif: React.FC<NotifProps> = ({ time, message }) => {
  return (
    <div className="notif-container">
      <span className="time-text">{time}</span>
      <span className="message-text">{message}</span>
    </div>
  );
};

export default Notif;
