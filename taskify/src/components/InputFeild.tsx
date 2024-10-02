import React from "react";
import "./style.css";

function InputFeild() {
  return (
    <form className="input">
      <input placeholder="Enter a task" className="inputBox" />
      <button type="submit" className="inputSubmit">
        Go
      </button>
    </form>
  );
}

export default InputFeild;
