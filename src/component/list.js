import React, { useState } from "react";
import PropTypes from "prop-types";
import Item from "./item";
List.prototype ={
  tasks: PropTypes.array,

};
List.defaultProp = {
  tasks: null,
  
};

function List(props){
  
    var { tasks, onDelete, onUpdateStatus, UpdateStatus } = props;
    // console.log(tasks)
    var elm = tasks.map((task, index) => {
      return (
        <Item
          key={task.id}
          index={index}
          task={task}
          onDelete={onDelete}
          onUpdateStatus={onUpdateStatus}
          UpdateStatus={UpdateStatus}
        />
      );
    });

    return <ul className="todo-list">{elm}</ul>;
  
}
export default List;
