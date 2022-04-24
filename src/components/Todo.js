import styled from 'styled-components';
import { ACTIONS } from './UseReducer2';

const Todo = ({ todo, dispatch }) => {
  console.log('todo:', todo);
  const { complete } = todo;
  return (
    <Div>
      <Span
        // style={{ color: complete ? 'black' : 'red' }}
        // todo={todo}
        complete={complete}
      >
        {todo.name}
      </Span>
      <button
        onClick={() =>{
          dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
        }}
        // calls dispatch with the toogel-todo type and gives id of current todo inside payload
      >
        Toggle
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } });
        }}
      >
        Delete
      </button>
    </Div>
  );
};

const Div = styled.div``;

const Span = styled.span`
  color: ${({ complete }) => (complete ? 'black' : 'red')};
`;
export default Todo;
