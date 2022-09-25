import React, { useState } from "react";
import "./GoalList.css";
import GoalItems from "./GoalItems";


const GoalList = function (props) {

    const getDeletedObj = (propsId) => {
        props.getDeleteObj(propsId);
    }

  return (
    <div >
      {props.itemList.map((eachobj, i) => {
          return <GoalItems getDeletedObj={getDeletedObj} text={eachobj.text} id={eachobj.id} key={i}/> 
      })}
    </div>
  );
};

export default GoalList;
