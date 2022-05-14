const ACTION = {
  ADD_TODO: 'todos/ADD_TODO',
  TOGGLE_TODO: 'todos/TOGGLE_TODO',
};

export const addTodo = text => ({
  type: ACTION.ADD_TODO,
  text,
});

export const toggleTodo = id => ({
  type: ACTION.TOGGLE_TODO,
  id,
});

const initialState = [{ id: 1, text: 'default state', done: false }];

export const todos = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.ADD_TODO:
      return [
        ...state,
        {
          id: Date.now(),
          text: action.text,
          done: false,
        },
      ];
    case ACTION.TOGGLE_TODO:
      return state.map(el =>
        el.id === action.id ? { ...el, done: !el.done } : el
      );
    default:
      return state;
  }
};
