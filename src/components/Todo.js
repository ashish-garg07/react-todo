import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../actions";

const Todo = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo => (
      <li
        onClick={() => toggleTodo(todo.id)}
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </li>
    ))}
  </ul>
);

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
