import React from "react";
import { Link } from "react-router-dom";
export default function Profile({
  headerValue,
  imgUrl,
  repoUrl,
  homepage,
  star,
  fork,
  issue,
}) {
  return (
    <>
      <div className="profile-item">
        <h1>#{headerValue}</h1>
        <img src={imgUrl} alt="repo" />
        <Link className="git" to={{ pathname: repoUrl }} target="_blank">
          Git hub page
        </Link>
        <Link className="git" to={{ pathname: homepage }} target="_blank">
          Home page
        </Link>
        <h3>{star}</h3>
        <h3>{fork}</h3>
        <h3>{issue}</h3>
      </div>
    </>
  );
}
