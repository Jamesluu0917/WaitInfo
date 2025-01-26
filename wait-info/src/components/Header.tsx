import "./../App.css";

function Header() {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "15px",
        padding: "15px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontSize: "20px",
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
          <h2
            style={{
              fontSize: "12px",
              marginRight: "10px",
            }}
          >
            Julia Grenier
          </h2>
          <img
            style={{ width: "10px", height: "10px" }}
            src="https://static.thenounproject.com/png/551749-200.png"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Header;
