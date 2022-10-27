import React from "react";
interface AddTaskFormProps {
  onAddTask: React.FormEventHandler;
}

const AddTaskForm: React.FC<AddTaskFormProps> = (props) => {
  return (
    <form className="addTaskForm" onSubmit={props.onAddTask}>
      <label htmlFor="addTaskInput">Add new Task</label>
      <input
        type="text"
        name="addTaskInput"
        id="addTaskInput"
        placeholder="Type your task"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTaskForm;