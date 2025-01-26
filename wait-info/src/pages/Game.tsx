import { useState, useEffect } from "react";
import Header from "../components/Header";
import "./../App.css";
import "./Game.css";

const Game = () => {
  const [sequence, setSequence] = useState<number[]>([]); // Sequence of button indices
  const [playerSequence, setPlayerSequence] = useState<number[]>([]); // Player's input sequence
  const [level, setLevel] = useState<number>(1); // Current level
  const [isPlayerTurn, setIsPlayerTurn] = useState<boolean>(false); // Player's turn flag
  const [gameOver, setGameOver] = useState<boolean>(false); // Game over flag
  const buttonColors = ["#296EB4", "#519872", "#F9C846", "#FF6666"]; // Button colors

  // Start a new game
  const startNewGame = () => {
    setSequence([]);
    setPlayerSequence([]);
    setLevel(1);
    setGameOver(false);
    setIsPlayerTurn(false);
    generateNextSequence([]);
  };

  // Generate the next step in the sequence
  const generateNextSequence = (currentSequence: number[]) => {
    const nextSequence = [...currentSequence, Math.floor(Math.random() * 4)];
    setSequence(nextSequence);
    setPlayerSequence([]);
    setIsPlayerTurn(false);
  };

  // Play the sequence by lighting up buttons
  const playSequence = async (sequence: number[]) => {
    for (const index of sequence) {
      await new Promise((resolve) => setTimeout(resolve, 600));
      highlightButton(index);
      await new Promise((resolve) => setTimeout(resolve, 600));
    }
    setIsPlayerTurn(true); // Enable player's turn after sequence playback
  };

  // Highlight a button (visual feedback)
  const highlightButton = (index: number) => {
    const button = document.getElementById(`button-${index}`);
    if (button) {
      button.classList.add("highlight");
      setTimeout(() => {
        button.classList.remove("highlight");
      }, 300);
    }
  };

  // Handle player's button click
  const handleButtonClick = (index: number) => {
    console.log(index);
    if (!isPlayerTurn || gameOver) return; // Ignore clicks if it's not the player's turn or game over

    const newPlayerSequence = [...playerSequence, index];
    setPlayerSequence(newPlayerSequence);

    // Check if the player's input matches the sequence
    if (sequence[newPlayerSequence.length - 1] !== index) {
      console.log(index);
      console.log(sequence);
      console.log(newPlayerSequence);
      setGameOver(true); // Player failed the sequence
      return;
    }

    // If player completes the sequence, proceed to the next level
    if (newPlayerSequence.length === sequence.length) {
      setLevel((prev) => prev + 1);
      setIsPlayerTurn(false);
      setTimeout(() => generateNextSequence(sequence), 1000); // Delay before next sequence
    }
  };

  // Start the game when the component mounts
  useEffect(() => {
    startNewGame();
  }, []);

  // Play the sequence whenever it changes
  useEffect(() => {
    if (sequence.length > 0) {
      playSequence(sequence);
    }
  }, [sequence]);

  return (
    <div>
      <Header />
      <h1
        style={{
          marginTop: "15px",
          marginBottom: "10px",
          fontSize: "2rem",
        }}
      >
        Let's play a game!
      </h1>
      <div
        style={{
          alignItems: "center",
          minHeight: "300px",
          textAlign: "center",
        }}
      >
        {gameOver ? (
          <div>
            <h2
              style={{ fontSize: "32px", color: "red", marginBottom: "20px" }}
            >
              Game Over!
            </h2>
            <button className="start-button" onClick={startNewGame}>
              Restart Game
            </button>
          </div>
        ) : (
          <>
            <h3
              style={{
                fontSize: "24px",
                marginTop: "0px",
                marginBottom: "0px",
              }}
            >
              Level {level}
            </h3>
            <h2
              style={{
                fontSize: "16px",
                marginBottom: "20px",
                marginTop: "0px",
              }}
            >
              Repeat the sequence of button presses as it grows.
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px",
                justifyContent: "center",
              }}
            >
              {buttonColors.map((color, index) => (
                <button
                  key={index}
                  id={`button-${index}`}
                  className="game-button"
                  style={{
                    backgroundColor: color,
                    margin: "auto",
                    marginTop: "0px",
                  }}
                  onClick={() => handleButtonClick(index)}
                ></button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Game;
