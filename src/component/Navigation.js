import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  const linkArr = ["/", "Battle"];
  const linkStyle = {
    display: "inlineBlock",
    margin: "10px 10px",
    padding: "10px 20px",
    color: "black",
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "center",
  };
  return (
    <div>
      <div>
        {linkArr.map((link, index) => (
          <Link style={linkStyle} key={index} to={`/${link}`}>
            {link === "/" ? "Popular" : link}
          </Link>
        ))}
      </div>
    </div>
  );
}
