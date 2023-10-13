import React from "react";
import Button from "./Button";

const Task = ({id,title, content}) => {
  
  const trimText = (text, chars) => {
    let isTrimmed = text.length > chars ? text.substring(0, chars) + "..." : text;

    return isTrimmed;
  }

  return <div className="task">
    <div className="task-row">
    <h2>{title}</h2>
    <p>{trimText(content, 50)}</p>
    </div>
    <div className="row">
    <Button  label="Finished" type="secondary"/>
    <Button label="Delete"/>


    </div>
  </div>
}

export default Task;