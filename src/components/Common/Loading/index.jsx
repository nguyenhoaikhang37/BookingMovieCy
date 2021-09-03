import React from "react";
import "./Loading.scss";

const Loading = () => {
  return (
    <div
      style={{
        background: "#0a1023",
        position: "fixed",
        width: "100%",
        height: "100vh",
      }}
    >
      <div className="loader">
        <div className="inner one" />
        <div className="inner two" />
        <div className="inner three" />
      </div>
    </div>
  );
};

export default Loading;
