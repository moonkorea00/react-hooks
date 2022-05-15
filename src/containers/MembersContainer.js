import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../modules/members';
import Members from '../components/Members';

const MembersContainer = () => {
  const { member, totalMembers } = useSelector(state => ({
    totalMembers: state.members.totalMembers,
    member: state.members.member,
  }));

  const dispatch = useDispatch();

  const onIncrement = (id) => {
    dispatch(increment(id));
  };

  const onDecrement = (id) => {
    dispatch(decrement(id));
  };

  return (
    <div>
      {member.map(el => (
        <Members
          key={el.id}
          el={el}
          totalMembers={totalMembers}
          // name="Michael"
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      ))}
      {/* <Members
        // familyMembers={familyMembers}
        totalMembers={totalMembers}
        name="Michael"
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      /> */}
    </div>
  );
};

export default MembersContainer;
