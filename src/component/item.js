import React, { useState } from "react";
import PropTypes from "prop-types";
Item.prototype ={
  task: PropTypes.array,
  onDelete: PropTypes.func,
};
Item.defaultProp = {
  task: null,
  onDelete: null,
};

function Item(props){
  const {task,onUpdateStatus,onDelete} = props;
  console.log(task)
  function handleonUpdateStatus(){
    onUpdateStatus(task);
  };
  function handleonDelete(){
    onDelete(task.id);
  };
  
    // var { task } = this.props;

    return (
      <li >
        <input
          className="toggle"
          type="checkbox"
          checked={task.status === true}
          onClick={handleonUpdateStatus}
        />
        <label className={task.status === true ? 'completed' : ''}>{task.name}</label>
        <button className="destroy" onClick={handleonDelete}></button>
      </li>
    );
  
}

export default Item;
