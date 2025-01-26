import React, { useState, useActionState } from "react";
import { Divider } from "@mui/material";
import "../index.css";
import "./AddPatientPopup.css";
//import { addNewPatient } from "./api";

const AddPatientPopup = () => {
  /*
  async function signup(formData) {
    "use server";
    const patientName = formData.get("name");
    const phoneNumber = formData.get("phoneNumber");
    const priorityLevel = formData.get("priorityLevel");
    try {
      await addNewPatient(patientName, phoneNumber, priorityLevel);
      alert(`Added new patient with ID ${PATIENTID}`);
    } catch (err) {
      return err.toString();
    }
  }*/
  //const [message, signupAction] = useActionState(signup, null);
  //action={signupAction}
  //{!!message && <p>{message}</p>}
  return (
    <div className="popup-container">
      <h1>Add a patient</h1>
      <form
        id="signup-form"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "stretch", // Ensure inputs stretch correctly
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center", // Align label and input vertically
          }}
        >
          <label htmlFor="name" style={{ flexShrink: 0 }}>
            Name:
          </label>
          <input
            style={{ marginLeft: "auto", maxWidth: "200px" }}
            name="name"
            id="name"
            placeholder="name"
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <label htmlFor="phoneNumber" style={{ flexShrink: 0 }}>
            Phone Number:
          </label>
          <input
            style={{ marginLeft: "auto", maxWidth: "200px" }}
            name="phoneNumber"
            id="phoneNumber"
            placeholder="phone number"
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <label htmlFor="priorityLevel" style={{ flexShrink: 0 }}>
            Priority Level:
          </label>
          <input
            style={{ marginLeft: "auto", maxWidth: "200px" }}
            name="priorityLevel"
            id="priorityLevel"
            placeholder="priority level"
          />
        </div>

        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          <button type="submit">Save</button>
          <button type="button">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddPatientPopup;
