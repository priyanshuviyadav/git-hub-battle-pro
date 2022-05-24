import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Battle() {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  const [player1ImgUrl, setPlayer1ImgUrl] = useState("");
  const [player2ImgUrl, setPlayer2ImgUrl] = useState("");
  // const navigate = useNavigate();

  return (
    <>
      <h1>Battle</h1>
      <div className="battle">
        <div className="profileInfo">
          <img src={player1ImgUrl} alt="player-one" />
          <input
            placeholder="player1"
            onChange={(e) => setPlayer1(e.target.value)}
            value={player1}
          />
          <button
            id="player"
            onClick={() =>
              setPlayer1ImgUrl(`https://github.com/${player1}.png?size=100`)
            }
          >
            player1
          </button>
        </div>
        <div className="profileInfo">
          <img src={player2ImgUrl} alt="player-two" />
          <input
            placeholder="player2"
            onChange={(e) => setPlayer2(e.target.value)}
            value={player2}
          />
          <button
            id="player"
            onClick={() =>
              setPlayer2ImgUrl(`https://github.com/${player2}.png?size=100`)
            }
          >
            player2
          </button>
        </div>
      </div>
      <button className="battle-btn">
        <Link className="battle-btn" to={`result?p1=${player1}&p2=${player2}`}>
          Battle Result
        </Link>
      </button>
    </>
  );
}
