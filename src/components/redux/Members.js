const Members = props => {
  const { onIncrement, onDecrement, onToggle, onDelete } = props;
  const { familyMembers, id, name, isMember } = props.el;

  return (
    <>
      <div style={{ height: '10vh', width: '50vw' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '30px',
            backgroundColor: 'grey',
          }}
        >
          <span onClick={()=>onToggle(id)}style={{ marginRight: '15px', cursor: 'pointer'}}>{name}</span>
          {isMember ? <span>O</span> : <span>X</span>}
        </div>
        <div style={{ border: '1px solid black' }}>
          Family Members: {familyMembers}
          <button
            onClick={() => onIncrement(id)}
            style={{ marginLeft: '10vw' }}
          >
            +
          </button>
          <button
            disabled={familyMembers <= 0 && true}
            onClick={() => onDecrement(id)}
            style={{ marginLeft: '2vw' }}
          >
            -
          </button>
          <button style={{ marginLeft: '3vw' }} onClick={() => onDelete(id)}>
            delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Members;
