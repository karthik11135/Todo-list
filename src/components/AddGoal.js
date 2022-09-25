import "./AddGoal.css";
import React, { isValidElement, useState } from "react";

const AddGoal = (props) => {
  const [inputVal, setInputVal] = useState("");
  const [blankText, setBlankText] = useState(true);

  const inputHandler = (e) => {
    setInputVal(e.target.value);
    if (e.target.value.trim() !== "") {
      setBlankText(true);
    }
  };

  const sumbitHandler = (e) => {
    e.preventDefault();
    const data = {
      text: inputVal,
      id: (Math.random() * Math.random()).toFixed(8),
    };

    if (inputVal.trim() !== "") {
      props.getNewObj(data);
      setInputVal("");
    } else {
      setBlankText(false);
    }
  };

  const removeOnClick = (e) => {
    e.preventDefault();
    props.removeAll();
  };

  return (
    <form onSubmit={sumbitHandler} className="add-box">
      <label>Daily ToDo's</label>
      <input
        className={blankText ? "" : "invalid"}
        value={inputVal}
        onChange={inputHandler}
        type="text"
      />
      <button type="submit" value="Add">
        Add
      </button>

      <button onClick={removeOnClick}>Remove All</button>
    </form>
  );
};

export default AddGoal;
