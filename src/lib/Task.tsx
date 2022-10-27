import React, { useState } from "react";
export interface TaskProps {
  taskText: string;
  id: string;
  handleClick?: React.MouseEventHandler;
}

const Task: React.FC<TaskProps> = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const style = { backgroundColor: "#4caf50", color: "#fff" };

  const changeColor = () => {
    setIsChecked(!isChecked);
  };

  return (
    <tr className="task" id={props.id} style={isChecked ? style : {}}>
      <td>{props.taskText}</td>
      <td>
        <input type="checkbox" name="taskCheckbox" onClick={changeColor} />
      </td>
      <td>
        <button onClick={props.handleClick}>
          <i className="icon-trash"></i>
        </button>
      </td>
    </tr>
  );
};

export default Task;