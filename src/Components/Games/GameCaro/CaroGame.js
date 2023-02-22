import React, { useState, useEffect, useRef } from "react";
import { calculateAITurn } from "./AIGame";
import "../../../assets/css/caroGame.css";
import {
  initiateSocketConnection,
  disconnectSocket,
  sendMessage,
  subscribeToMessages,
  subscribeToPlayTurn,
  joinRoom,
  playTurn,
  subscribeJoinRoom,
  startGame,
  subscribeStartGame,
} from "../../../service/socketio.service";
import ComeBack from "../../ComeBack/ComeBack";

const userLocal = JSON.parse(localStorage.getItem("USER_LOCAL"));
const curentUserId = userLocal?.user?.id;

const SENDER = {
  id: curentUserId,
  name: userLocal?.user?.name,
};

const GAME_STATE = {
  PLAYER_TURN: "player_turn",
  AI_TURN: "ai_turn",
  PLAYER_WON: "player_won",
  AI_WON: "player_o_won",
  DRAW: "game_draw",
  ERROR: "game_error",
};

export const SPACE_STATE = {
  PLAYER: "player_filled",
  AI: "ai_filled",
  EMPTY: "empty_space",
};

export const GRID_LENGTH = 9;
const MAX_MOVES = 10;

const getGameStatus = (gameState, isPlayer1) => {
  console.log(isPlayer1, "isPlayer1");
  switch (gameState) {
    case GAME_STATE.PLAYER_TURN: {
      return "Your Turn";
    }
    case GAME_STATE.AI_TURN: {
      return "";
    }
    case GAME_STATE.PLAYER_WON: {
      return isPlayer1 ? "You Won!" : "You Loss!";
    }
    case GAME_STATE.AI_WON: {
      return !isPlayer1 ? "You Won!" : "You Loss!";
    }
    case GAME_STATE.DRAW: {
      return "Draw";
    }
    case GAME_STATE.ERROR: {
      return "Error";
    }
    default: {
      return "Unknown game state " + gameState;
    }
  }
};

const getSquareSymbol = (spaceStatus) => {
  switch (spaceStatus) {
    case SPACE_STATE.PLAYER: {
      return "X";
    }
    case SPACE_STATE.AI: {
      return "O";
    }
    case SPACE_STATE.EMPTY: {
      return "";
    }
    default: {
      return "";
    }
  }
};

const createEmptyGrid = () => {
  return Array(GRID_LENGTH).fill(SPACE_STATE.EMPTY);
};

const getSpaceStateClass = (spaceState, gameState, winSpaces, spaceIndex) => {
  let space = "";

  if (spaceState === SPACE_STATE.AI) {
    space += "o-player";

    if (gameState === GAME_STATE.AI_WON && winSpaces.includes(spaceIndex)) {
      space += " o-winner";
    }
  }

  if (spaceState === SPACE_STATE.PLAYER) {
    space += "x-player";

    if (gameState === GAME_STATE.PLAYER_WON && winSpaces.includes(spaceIndex)) {
      space += " x-winner";
    }
  }

  return space;
};

const isDraw = (moveCount) => {
  return moveCount === MAX_MOVES;
};

const checkWinner = (grid, moveCount) => {
  const winnerSpaces = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  if (isDraw(moveCount)) {
    return {
      winner: GAME_STATE.DRAW,
      winSpaces: [],
    };
  }

  for (let i = 0; i < winnerSpaces.length; i++) {
    const [a, b, c] = winnerSpaces[i];

    if (
      grid[a] === SPACE_STATE.EMPTY &&
      grid[b] === SPACE_STATE.EMPTY &&
      grid[c] === SPACE_STATE.EMPTY
    ) {
      continue;
    }

    if (grid[a] && grid[a] === grid[b] && grid[a] === grid[c]) {
      let winner = null;

      if (grid[a] === SPACE_STATE.PLAYER) {
        winner = GAME_STATE.PLAYER_WON;
      } else {
        winner = GAME_STATE.AI_WON;
      }

      return {
        winner: winner,
        winSpaces: [a, b, c],
      };
    }
  }

  return null;
};

export default function CaroGame() {
  // Grid State
  const [grid, setGrid] = useState(createEmptyGrid());
  // Count of all moves made
  const [moveCount, setMoveCount] = useState(0);
  // Spaces used to get a win
  const [winSpaces, setWinSpaces] = useState([]);
  // Current game state
  const [gameState, setGameState] = useState(GAME_STATE.PLAYER_TURN);

  // Whenever the game state changes
  // from player interaction,
  // we handle logic flow in
  // here.

  const [gameStatus, setGameStatus] = useState(null);

  useEffect(() => {
    let params = new URL(document.location).searchParams;
    let token = params.get("token");
    let roomId = params.get("roomId");
    submitToken(token);
    setRoom(roomId);
    joinRoom(roomId);
    setTimeout(() => {
      startGame(roomId, (data) => {
        setGameStatus(data);
      });
    }, 2000);
  }, []);

  useEffect(() => {
    // Player took turn,
    // check if game still running.
    let winner = checkWinner(grid, moveCount);

    // If the player won, update state to reß flect.
    if (winner) {
      setGameState(winner.winner);
      setWinSpaces(winner.winSpaces);
    }

    // Run AI turn
    if (gameState === GAME_STATE.AI_TURN && moveCount < 10) {
      // const aiSpace = calculateAITurn(grid, moveCount);
      // setMoveCount((oldMoves) => {
      //   return oldMoves + 1;
      // });
      // fillGridSpace(aiSpace, SPACE_STATE.AI);
      // winner = checkWinner(grid, moveCount);
    }

    // If AI won, update state to reflect, else
    // go back to player turn.
    if (winner) {
      setGameState(winner.winner);
      setWinSpaces(winner.winSpaces);
    } else {
      // setGameState(GAME_STATE.PLAYER_TURN);
    }
  }, [gameState, grid]);

  // Reset state to default values
  const reset = () => {
    setGrid(createEmptyGrid());
    setGameState(GAME_STATE.PLAYER_TURN);
    setMoveCount(0);
    setWinSpaces([]);
  };

  // Fill in a grid box with status
  const fillGridSpace = (gridIndex, spaceStatus) => {
    setGrid((oldGrid) => {
      oldGrid[gridIndex] = spaceStatus;
      return [...oldGrid];
    });
  };
  const [isPlayer1, setIsPlayer1] = useState(null);
  useEffect(() => {
    if (!gameStatus) return;
    setIsPlayer1(gameStatus.player1 === curentUserId || false);
  }, [gameStatus]);

  // Fill in the grid array with the player space state.
  const handlePlayerClick = (gridIndex) => {
    if (!gameStatus || !gameStatus.playing) {
      window.alert("please wait player ...");
      return;
    }
    if (gameState !== GAME_STATE.PLAYER_TURN) {
      return;
    }
    if (grid[gridIndex] === SPACE_STATE.EMPTY) {
      fillGridSpace(gridIndex, isPlayer1 ? SPACE_STATE.PLAYER : SPACE_STATE.AI);
      setGameState(GAME_STATE.AI_TURN);
      setMoveCount((oldMoves) => {
        return oldMoves + 1;
      });
      playTurn(
        { message: { gridIndex: gridIndex, isPlayer1 }, roomName: room },
        (cb) => {
          // callback is acknowledgement from server
          console.log(cb, "cb");
        }
      );
    }
  };

  const checkTypeSquareRealtime = (isPlayer1) => {
    console.log(isPlayer1, "checkTypeSquareRealtime");
    if (!isPlayer1) {
      return SPACE_STATE.AI;
    }
    if (isPlayer1) {
      return SPACE_STATE.PLAYER;
    }
  };

  const Square = (props) => {
    return (
      <div
        className={
          "shadow-md h-24 w-24 rounded-lg bg-white text-7xl text-center cursor-default font-light flex items-center justify-center " +
          getSpaceStateClass(
            grid[props.squareIndex],
            gameState,
            winSpaces,
            props.squareIndex
          )
        }
        onClick={() => {
          handlePlayerClick(props.squareIndex);
        }}
      >
        {getSquareSymbol(grid[props.squareIndex])}
      </div>
    );
  };

  const [token, setToken] = useState("");
  const [room, setRoom] = useState("");
  const [messages, setMessages] = useState([]);

  // eslint-disable-next-line no-undef
  const tokenInputRef = useRef("");
  // eslint-disable-next-line no-undef
  const inputRef = useRef("");

  useEffect(() => {
    if (token) {
      console.log("token");
      initiateSocketConnection(token);
      // subscribeJoinRoom

      subscribeJoinRoom((err, data) => {
        console.log(data, "subscribeJoinRoom");
      });
      subscribeToMessages((err, data) => {
        console.log(data);
        setMessages((prev) => [...prev, data]);
      });

      subscribeStartGame((err, data) => {
        setGameStatus(data);
        // fillGridSpace(data.message, SPACE_STATE.PLAYER);
      });

      subscribeToPlayTurn((err, data) => {
        console.log(data, "subscribeToPlayTurn");
        fillGridSpace(
          data.message?.gridIndex,
          checkTypeSquareRealtime(data.message?.isPlayer1)
        );
        setGameState(GAME_STATE.PLAYER_TURN);
      });
      return () => {
        disconnectSocket();
      };
    }
  }, [token]);

  const submitToken = (tokenValue) => {
    const token = JSON.parse(localStorage.getItem("USER_LOCAL"))?.tokens?.access
      ?.token;
    console.log(token, "token");
    setToken(token);
  };

  const CHAT_ROOM = "myRandomChatRoomId";

  const submitMessage = (e) => {
    e.preventDefault();
    const message = inputRef.current.value;
    sendMessage({ message, roomName: room }, (cb) => {
      // callback is acknowledgement from server
      setMessages((prev) => [
        ...prev,
        {
          message,
          ...SENDER,
        },
      ]);
      // clear the input after the message is sent
      inputRef.current.value = "";
    });
  };

  return (
    <>
      <section className="game-board">
        <ComeBack src={"/caroGame/room"} />
        <div className="text-center py-2 shadow-sm text-white text-5xl font-medium z-50 sticky mb-4">
          <h4 style={{ marginBottom: 14 }}>
            {getGameStatus(gameState, isPlayer1)}
          </h4>
          {!gameStatus ? (
            "loading ..."
          ) : (
            <ul>
              <li>Game play: {gameStatus.playing ? "2 / 2" : "1 / 2"}</li>
              <li>Status: {gameStatus.playing ? "gaming" : "pending"}</li>
            </ul>
          )}
        </div>
        <div className="max-w-md mx-auto">
          <div className="max-w-lg flex flex-col gap-5 mx-auto">
            <div className="flex gap-5 mx-auto">
              <Square squareIndex={0} />
              <Square squareIndex={1} />
              <Square squareIndex={2} />
            </div>
            <div className="flex gap-5 mx-auto">
              <Square squareIndex={3} />
              <Square squareIndex={4} />
              <Square squareIndex={5} />
            </div>
            <div className="flex gap-5 mx-auto">
              <Square squareIndex={6} />
              <Square squareIndex={7} />
              <Square squareIndex={8} />
            </div>
          </div>

          <div className="text-center">
            {/* <button
              className="bg-blue-500 text-white w-full py-2 font-semibold mt-10 rounded-md shadow-lg mb-5"
              onClick={() => {
                reset();
              }}
            >
              Reset
            </button> */}
            {/* <span className="block mt-5">
              Created by
              <a
                className="text-blue-500 underline ml-1"
                target="_blank"
                rel="noopener"
                href="https://www.gregorygaines.com"
              >
                Gregory Gaines
              </a>
              .
              <br /> Check out the tutorial
              <a
                className="text-blue-500 underline ml-1"
                target="_blank"
                rel="noopener"
                href="https://www.gregorygaines.com/blog/develop-unbeatable-tic-tac-toe-ai-react/"
              >
                here
              </a>
              .
            </span> */}
          </div>
        </div>
      </section>

      <div className="center">
        <div className="chat">
          <div className="messages" id="chat">
            <h5 style={{ color: "grey", textAlign: "center" }}>
              {" "}
              Chat with friend
            </h5>
            {messages.map((user, index) => (
              <div
                key={index}
                className={
                  user.id === curentUserId ? "message parker" : "message stark"
                }
              >
                {user.name}: {user.message}
              </div>
            ))}
          </div>
          <form className="input-div" onSubmit={submitMessage}>
            <div className="input">
              <input type="text" placeholder="Type in text" ref={inputRef} />
              <button type="submit">
                <i className="fa-regular fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
    //   <form onSubmit={submitToken}>
    //   <input type="text" placeholder="Enter token" ref={tokenInputRef} />
    //   <button type="submit">Submit</button>
    // </form>
    // {/* <button onClick={() => joinChatRoom()}>Join Room</button> */}
    // <div className="box">
    //   <form className="input-div" onSubmit={submitMessage}>
    //     <input type="text" placeholder="Type in text" ref={inputRef} />
    //     <button type="submit">Submit</button>
    //   </form>
    // </div>
  );
}
