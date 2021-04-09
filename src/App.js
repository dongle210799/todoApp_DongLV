import React, { useState } from "react";

import "./App.css";
import Input from "./component/input";
import List from "./component/list";
import Filter from "./component/filter";
import { v4 as uuidv4 } from "uuid";
import { set } from "lodash";

const iniTasks = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];
function App() {
  const [tasks, setTasks] = useState(iniTasks.slice());
  const [filter, setFilter] = useState("all");
  const [activeAll, setActiveAll] = useState(false);
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     tasks: [],
  //     filter: "all",
  //     activeAll: false,
  //   };
  // }

  function findIndex(id) {
    const a = [...tasks];
    var result = -1;
    a.forEach((task, index) => {
      if (task.id === id) {
        result = index;
      }
    });
    return result;
  }
  function onsubmit(data) {
    console.log(data.name);
    // var { tasks } = this.state;
    var elm = tasks.map((task, index) => {
      return task.name;
    });
    
    const res = elm.includes(data.name);
    console.log(res);

    if (res === false) {
      // var { tasks } = this.state;
      var arr = [...tasks];
      // console.log(tasks)
      data.id = uuidv4();
      arr.push(data);
      setTasks(arr);
      // this.setState({
      //   tasks: tasks,
      // });
      localStorage.setItem("tasks", JSON.stringify(arr));
    } else {
      alert("item đã có");
    }
  }
  function onDelete(id) {
    var arr = [...tasks];
    var index = findIndex(id);
    if (index !== -1) {
      arr.splice(index, 1);
      setTasks(arr);
      localStorage.setItem("tasks", JSON.stringify(arr));
    }
  }

  function onUpdateStatus(item) {
    // console.log(item);
    var arr = [...tasks];
    // var { tasks } = this.state;
    var index = findIndex(item.id);
    if (index !== -1) {
      arr[index].status = !arr[index].status;
      setTasks(arr);
      localStorage.setItem("tasks", JSON.stringify(arr));
    }
  }
  function UpdateStatus(data) {
    setFilter(data);
  }
  function onClear(data) {
    const arr1 = [...tasks];
    //  console.log(data)
    var tasks1 = arr1.filter((task) => {
      return task.status === false;
    });
    setTasks(tasks1);
    localStorage.setItem("tasks", JSON.stringify(tasks1));
  }

  function toggleAll() {
    if (activeAll === true) {
      console.log("active: true");
      const tasks1 = tasks.slice();
      tasks1.map((item) => (item.status = false));
      setTasks(tasks1);
      setActiveAll(false);
      // this.setState(
      //   {
      //     tasks: tasks1,
      //     activeAll: false,
      //   },

      localStorage.setItem("tasks", JSON.stringify(tasks));
    } else {
      console.log("active: false");
      const newTasks = tasks.slice();
      newTasks.map((item) => (item.status = true));
      setTasks(newTasks);
      setActiveAll(true);
      // this.setState({ tasks: newTasks, activeAll: true },
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }

  function filterTasks(input) {
    input = input.slice();
    const a1 = [...tasks];

    if (filter) {
      var a2 = a1.filter((task) => {
        if (filter === "all") {
          return tasks;
        } else {
          return task.status === (filter === "true" ? true : false);
        }
      });
    }

    return a2;
  }
  var activeCount = tasks.reduce((accum, todo) => {
    return todo.status === true ? accum : accum + 1;
  }, 0);
  var completedCount = tasks.length - activeCount;
  return (
    <body className="container">
      <header className="header">
        <h1>todos</h1>
        <Input onsubmit={onsubmit} />
      </header>
      <section className="main">
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          onChange={toggleAll}
          checked={activeCount === 0}
          autoComplete="off"
        />
        <label htmlFor="toggle-all" />
        <List
          tasks={filterTasks(tasks)}
          onDelete={onDelete}
          onUpdateStatus={onUpdateStatus}
          UpdateStatus={UpdateStatus}
        />
      </section>

      <Filter
        tasks={filterTasks(tasks)}
        UpdateStatus={UpdateStatus}
        onClear={onClear}
        active={completedCount}
      />
    </body>
  );
}

export default App;
