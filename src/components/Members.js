const Members = props => {
  const { onIncrement, onDecrement, totalMembers } = props;
  const { familyMembers, isMember, id, name } = props.el;
  // console.log('props]:', props);
  // console.log(props.el);

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
          {name}
        </div>
        <div style={{ border: '1px solid black' }}>
          Family Members: {familyMembers}
          <button
            // onClick={id => onIncrement(id)}
            // onClick={onIncrement}

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
        </div>
      </div>
    </>
  );
};

export default Members;
