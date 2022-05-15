import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  create,
  toggle,
  deleter,
} from '../modules/members';
import Members from '../components/redux/Members';
import AddMember from '../components/redux/AddMember';

const MembersContainer = () => {
  const { member, totalMembers } = useSelector(state => ({
    totalMembers: state.members.totalMembers,
    member: state.members.member,
  }));

  const dispatch = useDispatch();

  const onIncrement = id => {
    dispatch(increment(id));
  };

  const onDecrement = id => {
    dispatch(decrement(id));
  };

  const onCreate = data => {
    dispatch(create(data));
    console.log(data);
  };

  const onToggle = id => {
    dispatch(toggle(id));
  };
  const onDelete = id => {
    dispatch(deleter(id));
  };

  return (
    <div>
      <AddMember onCreate={onCreate} />
      <p>Total Members: {totalMembers}</p>
      <form
        onSubmit={() => {
          onCreate();
        }}
      ></form>
      {member.map(el => (
        <Members
          key={el.id}
          el={el}
          totalMembers={totalMembers}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default MembersContainer;
