import { useState } from 'react';
const AddMember = ({ onCreate }) => {
  const [memberInfo, setMemberInfo] = useState({ name: '', familyMembers: '' });
  const { name, familyMembers } = memberInfo;
  const handleSubmit = e => {
    e.preventDefault();
    onCreate(memberInfo);
  };
  const onChange = e => {
    const { name, value } = e.target;
    setMemberInfo({ ...memberInfo, [name]: value });
  };

  const onChangeNumber = e => {
    const { name, valueAsNumber } = e.target;
    setMemberInfo({ ...memberInfo, [name]: valueAsNumber });
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={onChange}
          placeholder="Enter Name"
        />
        <input
          type="number"
          name="familyMembers"
          value={familyMembers}
          onChange={onChangeNumber}
          placeholder="family members"
          min="1"
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddMember;
