import React from "react";
import AddRedux from "./AddRedux";
import CounterRedux from "./CounterRedux";
import HelloRedux from "./HelloRedux";
import ToDoList from "./todos/TodoList";


const ReduxExamples = () => {
  return(
    <div>
      <h2>Redux Examples</h2>
      <HelloRedux/>
      <CounterRedux/>
      <AddRedux/>
      <ToDoList/>
    </div>
  );
};

export default ReduxExamples;