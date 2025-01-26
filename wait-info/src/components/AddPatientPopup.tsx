import "../index.css";
//import { addNewPatient } from "./api";

const AddPatientPopup = () => {
  return (
    <div>
  <h2>Add a patient</h2>
  <form id="signup-form" style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <label htmlFor="name" style={{ flexBasis: "50%", textAlign: "left" }}>
        Name:
      </label>
      <input
        style={{
          flexBasis: "50%",
          width: "200px",
          textAlign: "center",
        }}
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
      <label htmlFor="phoneNumber" style={{ flexBasis: "50%", textAlign: "left" }}>
        Phone Number:
      </label>
      <input
        style={{
          flexBasis: "50%",
          width: "200px",
          textAlign: "center",
        }}
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
      <label htmlFor="priorityLevel" style={{ flexBasis: "50%", textAlign: "left" }}>
        Priority Level:
      </label>
      <input
        style={{
          flexBasis: "50%",
          width: "200px",
          textAlign: "center",
        }}
        name="priorityLevel"
        id="priorityLevel"
        placeholder="priority level"
      />
    </div>

    <div style={{ display: "flex", gap: "10px", marginTop: "10px", justifyContent: "flex-end" }}>
      <button className="cancel" type="button">Cancel</button>
      <button type="submit" style={{ backgroundColor: '#6BBAEC' }}>Save</button>
    </div>
  </form>
</div>

  );
};

export default AddPatientPopup;
