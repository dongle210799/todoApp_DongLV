import React, { useState } from "react";
import PropTypes from "prop-types";
Filter.prototype={
  tasks: PropTypes.array,
  active: PropTypes.number,
}
Filter.defaultProp={
  tasks: null,
  active: null,
}

function  Filter(props){
  const {tasks,UpdateStatus,onClear,active} = props;
  const [arrtab,setArrtab]= useState([
        { id: 1, name: "All",value:"all" },
        { id: 2, name: "Active",value:"false" },
        { id: 3, name: "Completed",value:"true" },]);
  const [activeClass,setActiveclass]=useState(1);
  // constructor(props) {
  //   super(props);
  //   this.state = {
      
  //     arrTab: [
  //       { id: 1, name: "All",value:"all" },
  //       { id: 2, name: "Active",value:"false" },
  //       { id: 3, name: "Completed",value:"true" },
  //     ],
  //     activeClass: 1,
  //   };
  // }
  function onChange(id, event){
    setActiveclass(id);
    var target = event.target;
    
    UpdateStatus(event);
    
    
  };
  function handleonClear(event){
    onClear(event.target.value);
    // console.log(event.target.value)
  };

  // render() {
  //   var { tasks, active } = this.props;
  //   var {  arrTab, activeClass } = this.state;

    const elTab = arrtab.map((item, i) => {
      return (
        <li key={i}>
          <button
            className={activeClass === item.id ? "active" : ""}
            onClick={() => onChange(item.id, item.value)}
          >
            {item.name}
          </button>
        </li>
      );
    });

    var clearButton = null;
    // console.log(active)
    if (active > 0) {
      clearButton = (
        <button className="clear-completed" onClick={handleonClear} value={true}>
          Clear completed
        </button>
      );
    }
    return (
      <div className="footer">
        <span className="todo-count">
          <strong>{tasks.length}</strong> items left
        </span>
        <ul className="filters">{elTab}</ul>
        {clearButton}
      </div>
    );
  }


export default Filter;
