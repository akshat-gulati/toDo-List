"use client";
import React, { useState } from "react";

// add some custom styles for the elements
const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "20px",
    fontSize: "40px",
    fontWeight: "bold",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    fontSize: "24px",
    border: "2px solid #ccc",
    margin: "10px",
    padding: "10px",
    width: "80%",
  },
  button: {
    backgroundColor: "#333",
    color: "#fff",
    fontSize: "24px",
    fontWeight: "bold",
    borderRadius: "10px",
    margin: "10px",
    padding: "10px",
    width: "40%",
  },
  list: {
    padding: "20px",
    backgroundColor: "#eee",
  },
  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
  taskTitle: {
    fontSize: "32px",
    fontWeight: "bold",
  },
  taskDesc: {
    fontSize: "24px",
  },
  deleteButton: {
    backgroundColor: "#f00",
    color: "#fff",
    fontSize: "24px",
    fontWeight: "bold",
    borderRadius: "10px",
    padding: "10px",
  },
};

const page = () => {
  const [title, setTitle] = useState(""); // use camelCase for variable names
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    setTitle(""); // use the same variable name as above
    setDesc(""); // use the same variable name as above
    console.log(mainTask);
  };
  const deleteHandler = (i) => {
    // use filter to create a new array without the item at index i
    let copytask = mainTask.filter((task, index) => index !== i); // update the state with the new array
    setMainTask(copytask);
  };

  let renderTask = <h2>ALL TASK DONE</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} style={styles.item}>
          <div>
            <h5 style={styles.taskTitle}>{t.title}</h5>
            <h6 style={styles.taskDesc}>{t.desc}</h6>
          </div>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            style={styles.deleteButton}
          >
            Delete Task
          </button>
        </li>
      );
    });
  }
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Akshat's ToDo List</h1>
      <form onSubmit={submitHandler} style={styles.form}>
        <input
          type="text"
          style={styles.input}
          placeholder="Enter Title here:"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value); // use the same variable name as above
          }}
        />
        <input
          type="text"
          style={styles.input}
          placeholder="Enter description here:"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value); // use the same variable name as above
          }}
        />
        <button type="submit" style={styles.button}>
          Add Task
        </button>
      </form>
      <hr />
      <div style={styles.list}>
        <ul>{renderTask}</ul>
      </div>
    </div>
  );
};

export default page;
