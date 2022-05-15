import MembersContainer from '../containers/MembersContainer';

const ACTION = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  CREATE: 'create',
  TOGGLE: 'toggle',
  DELETE: 'delete',
};

const initialState = {
  totalMembers: 1,
  member: [
    {
      id: 2,
      name: 'Michael',
      familyMembers: 1,
      isMember: true,
    },
    {
      id: 1,
      name: 'Daniel',
      familyMembers: 1,
      isMember: true,
    },
  ],
};

export const increment = id => {
  return {
    type: ACTION.INCREMENT,
    id,
  };
};

export const decrement = id => ({
  type: ACTION.DECREMENT,
  id,
});

export const toggle = () => ({
  type: ACTION.TOGGLE,
});

export const deleter = () => ({
  type: ACTION.DELETE,
});

export const members = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.INCREMENT:
      return {
        ...state,
        member: state.member.map(el =>
          el.id === action.id
            ? { ...el, familyMembers: el.familyMembers + 1 }
            : el
        ),
      };
    case ACTION.DECREMENT:
      return {
        ...state,
        member: state.member.map(el =>
          el.id === action.id
            ? { ...el, familyMembers: el.familyMembers - 1 }
            : el
        ),
      };
    case ACTION.CREATE:
      return;
    case ACTION.TOGGLE:
      return {
        ...state,
      };
    case ACTION.DELETE:
      return;
    default:
      return state;
  }
};
