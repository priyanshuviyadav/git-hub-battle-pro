import React, { useEffect, useState } from "react";
import Profile from "./Profile";

export default function Popular() {
  const [repository, setRepository] = useState([]);
  const [lang, setLang] = useState("All");

  const fetchAPI = () => {
    fetch(
      ` https://api.github.com/search/repositories?q=stars:>1+language:${lang}&sort=stars&order=desc&type=Repositories`
    )
      .then((response) => response.json())
      .then((data) => setRepository(data.items));
  };
  useEffect(() => {
    fetchAPI();
  }, [lang]);

  const repsitoryList = repository.map((item, index) => {
    const {
      svn_url: repoUrl,
      homepage,
      stargazers_count: star,
      forks_count: fork,
      open_issues: issue,
      owner: { avatar_url: imgUrl },
    } = item;

    return (
      <Profile
        headerValue={index + 1}
        imgUrl={imgUrl}
        repoUrl={repoUrl}
        homepage={homepage}
        star={star}
        fork={fork}
        issue={issue}
      />
    );
  });

  return (
    <>
      <h3>
        <button onClick={() => setLang("All")}>All</button>
        <button onClick={() => setLang("javascript")}>Javascript</button>
        <button onClick={() => setLang("java")}>Java</button>
        <button onClick={() => setLang("Ruby")}>Ruby</button>
        <button onClick={() => setLang("Python")}>Python</button>
      </h3>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {repsitoryList.length > 0 ? repsitoryList : "loading.."}
      </div>
    </>
  );
}
