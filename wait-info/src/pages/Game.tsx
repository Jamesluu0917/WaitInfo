import "./../App.css";

import "./Game.css";

const Game = () => {
  return (
    <div style={{ alignItems: "center", minHeight: "300px" }}>
      <h3 style={{ fontSize: "24px", marginTop: "25px", marginBottom: "20px" }}>
        Let's play a game!
      </h3>
      <h2 style={{ fontSize: "16px", marginBottom: "20px" }}>
        Repeat the sequence of button presses as it grows.
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "100%",
          width: "100%",
        }}
      >
        <button
          className="game-button"
          style={{ backgroundColor: "#296EB4", height: "100px", width: "100%" }}
        ></button>
        <div style={{ marginLeft: "10px", marginRight: "10px" }}></div>
        <button
          className="game-button"
          style={{ backgroundColor: "#519872", height: "100px", width: "100%" }}
        ></button>
      </div>
      <div
        style={{
          marginBottom: "15px",
          display: "flex",
          flexDirection: "row",
          height: "100%",
          width: "100%",
        }}
      >
        <button
          className="game-button"
          style={{ backgroundColor: "#F9C846", height: "100px", width: "100%" }}
        ></button>
        <div style={{ marginLeft: "10px", marginRight: "10px" }}></div>
        <button
          className="game-button"
          style={{ backgroundColor: "#FF6666", height: "100px", width: "100%" }}
        ></button>
      </div>
    </div>
  );
};

export default Game;
