import React, { useState } from "react";
import AddTaskForm from "./lib/AddTaskForm";
import Task, { TaskProps } from "./lib/Task";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([
    { taskText: "Make HW", id: "1666891161827" },
    { taskText: "Work on the project", id: "1666891161828" },
  ]);

  const addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      addTaskInput: { value: string };
    };

    const tasksCopy = [...tasks];
    let taskCopy = { ...tasks[tasks.length] };
    taskCopy = {
      taskText: target.addTaskInput.value,
      id: Date.now().toString(),
    };
    tasksCopy[tasks.length] = taskCopy;
    setTasks(tasksCopy);
    target.addTaskInput.value = "";
  };

  const removeTask = (id: string) => {
    const index = tasks.findIndex((task) => (task.id = id));
    const tasksCopy = [...tasks];
    tasksCopy.splice(index, 1);

    setTasks(tasksCopy);
  };

  const tasksList = tasks.map((task) => (
    <Task
      id={task.id}
      key={task.id}
      taskText={task.taskText}
      handleClick={() => removeTask(task.id)}
    />
  ));

  return (
    <div className="App">
      <AddTaskForm onAddTask={addTask} />
      <table className="tasks">
        <thead>
          <tr>
            <th>Task</th>
            <th>Mark as fulfilled</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>{tasksList}</tbody>
      </table>
    </div>
  );
}

export default App;