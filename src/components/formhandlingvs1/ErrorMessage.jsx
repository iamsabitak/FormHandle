import React from "react";

function ErrorMessage({ message }) {
  const style = {
    color: "red",
    width: "200px",
    fontFamily: "roboto",
  };

  return message ? <span style={style}>{message}</span> : null;
}

export default ErrorMessage;
