import React from 'react';
import style from "./TodoList.css";

const Todo = props => {
  return (
    <li id={props.id}>
      {props.text}
      <button className={style.itemRemove} onClick = {() => props.remove(props.id)}>x</button>
    </li>
  )
}

export default Todo;