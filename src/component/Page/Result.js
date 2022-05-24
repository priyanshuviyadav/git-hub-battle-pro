import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
export default function Result() {
  const [p1Info, setP1Info] = useState({});
  const [p2Info, setP2Info] = useState({});
  const [result, setResult] = useState("");
  const [searchParameter, setSearchParameter] = useSearchParams();

  const player1 = searchParameter.get("p1");
  const player2 = searchParameter.get("p2");

  const fetchRepoInfo = (repoName, playerId) => {
    fetch(`https://api.github.com/users/${repoName}`)
      .then((res) => res.json())
      .then((result) => {
        if (playerId === "p1") {
          setP1Info(result);
        } else {
          setP2Info(result);
        }
      });
  };
  useEffect(() => {
    fetchRepoInfo(player1, "p1");
    fetchRepoInfo(player2, "p2");
  }, [player1, player2]);

  useEffect(() => {
    if (p1Info.id && p2Info.id) {
      const p1Total = p1Info.public_repos + p1Info.public_gists;
      const p2Total = p2Info.public_repos + p2Info.public_gists;

      if (p1Total > p2Total) {
        setResult("player 1 is winner");
      } else {
        setResult("player 2 is winner");
      }
    }
  }, [p1Info, p2Info]);

  return (
    <>
      <div>
        <h1>Result </h1>
      </div>
      <h1>{result}</h1>
    </>
  );
}
