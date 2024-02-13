import React from "react";
import JavaScript from "./JavaScript";
import PathParameters from "./routing/PathParameters";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import Highlight from "./Highlight";
import Add from "./Add";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";

function Assignment3() {
  return (
    <div className="container">
      <h1>Assignment 3</h1>
      <JavaScript />
      <PathParameters />
      <Classes />
      <Styles />
      <ConditionalOutput />
      <Highlight>
        <p>Highlight me!</p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
        dignissimos nostrum laborum molestias vel, nisi laboriosam debitis
        eligendi recusandae, beatae cumque ratione quam hic, non ipsum! Quam
        neque odit dicta!
      </Highlight>
      <Add a={3} b={4} />
      <TodoItem />
      <TodoList />
    </div>
  );
}

export default Assignment3;
