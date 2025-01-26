import "./../App.css";
import SessionMenu from "../components/SessionMenu";

function Header() {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "0px", // Removed border-radius for full width
        padding: "15px",
        position: "fixed", // Fix it to the top of the page
        top: 0, // Align to the top
        left: 0, // Align to the left
        width: "100%", // Make it span the full width of the screen
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Add a subtle shadow
        zIndex: 1000, // Ensure it stays on top of other elements
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          maxWidth: "1200px", // Optional: Limit the content width for better alignment
          margin: "0 auto", // Center the content horizontally
        }}
      >
        <h1
          style={{
            fontSize: "20px",
            margin: 0, // Reset default margin for h1
          }}
        >
          <span style={{ color: "#6BBAEC" }}>Wait</span>Info
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <SessionMenu />
        </div>
      </div>
    </div>
  );
}

export default Header;
