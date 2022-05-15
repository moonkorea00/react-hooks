const ACTION = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  CREATE: 'create',
  TOGGLE: 'toggle',
  DELETE: 'delete',
};

const initialState = {
  totalMembers: 2,
  member: [
    {
      id: 1,
      name: 'Michael',
      familyMembers: 1,
      isMember: true,
    },
    {
      id: 2,
      name: 'Daniel',
      familyMembers: 1,
      isMember: false,
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
export const create = data => ({
  type: ACTION.CREATE,
  data,
});
export const toggle = id => ({
  type: ACTION.TOGGLE,
  id,
});
export const deleter = (id) => ({
  type: ACTION.DELETE,
  id
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
      return {
        totalMembers: state.totalMembers + 1,
        member: [
          ...state.member,
          {
            id: Date.now(),
            name: action.data.name,
            familyMembers: action.data.familyMembers,
            isMember: true,
          },
        ],
      };
    case ACTION.TOGGLE:
      return {
        ...state,
        member: state.member.map(el =>
          el.id === action.id ? { ...el, isMember: !el.isMember } : el
        ),
      };
    case ACTION.DELETE:
      return {
        totalMembers: state.totalMembers - 1,
        member: state.member.filter(el => el.id !== action.id),
      };
    default:
      return state;
  }
};
