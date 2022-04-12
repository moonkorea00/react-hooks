import { useState, useReducer } from 'react';
import styled from 'styled-components';
import Todo from './Todo';

export const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo',
};
const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          // return { ...todo, complete: !todo.complete };
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id);
    default:
      return todos;
  }
};

const newTodo = name => {
  return { id: Date.now(), name: name, complete: false };
};

const UseReducerHook2 = () => {
  const [name, setName] = useState('');
  const [todos, dispatch] = useReducer(reducer, []);

  const handleSubmit = event => {
    event.preventDefault();

    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={name}
          placeholder="useReducerHook2"
          onChange={e => {
            setName(e.target.value);
          }}
        ></Input>
      </Form>
      {todos.map(todo => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </>
  );
};

const Form = styled.form``;

const Input = styled.input``;
export default UseReducerHook2;
