import {  useReducer } from 'react';
import Books from './books';

export const ACTION = {
  onchange: 'onchange',
  create: 'create',
  delete: 'delete',
  toggle: 'toggle',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.onchange:
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.payload.name]: action.payload.value,
        },
      };
    case ACTION.create:
      return {
        books: state.books + 1,
        ...state,
        book: [
          ...state.book,
          {
            id: Date.now(),
            title: action.payload.title,
            body: action.payload.body,
          },
        ],
      };
    case ACTION.toggle:
      return {...state, book: state.book.map(book =>
        book.id === action.payload ? { ...book, isRead: !book.isRead } : book
      )}
    case ACTION.delete:
      return {
        ...state,
        book: state.book.filter(book=>action.payload!==book.id)
      };
  }
};
const ControlledInputs = () => {
  const [state, dispatch] = useReducer(reducer, {
    books: 1,
    inputs: { title: '', body: '' },
    book: [
      { id: 1, title: 'Harry Potter', body: 'fantasy novel', isRead: false },
    ],
  });
  // const [inputs, setInputs] = useState({ title: '', body: '', options: '' });
  // const { title, body, options } = inputs;

  const onChange = e => {
    const { name, value } = e.target;
    dispatch({ type: ACTION.onchange, payload: { name, value } });
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch({ type: ACTION.create, payload: { title, body } });
  };

  const { title, body } = state.inputs;
  return (
    <>
      <div
        style={{
          display: 'inline-flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <form
          style={{ display: 'flex', flexDirection: 'column' }}
          onSubmit={onSubmit}
        >
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={state.inputs.title}
            onChange={onChange}
            placeholder="Insert Title"
            required
          />
          <label>body</label>
          <textarea
            name="body"
            value={state.inputs.body}
            onChange={onChange}
            placeholder="Insert Information"
            required
          ></textarea>
          {/* <select
            name="options"
            defaultValue="select"
            value={options}
            onChange={onChange}
          >
            <option value="option1">option1</option>
            <option value="option2">option2</option>
          </select> */}
          <button>Add</button>
        </form>
      </div>
      <p>books: {state.books}</p>
      {state.book.map(book => {
        return <Books book={book} key={book.id} dispatch={dispatch} />;
      })}
    </>
  );
};

export default ControlledInputs;
