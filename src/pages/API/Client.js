const Client = ({ data }) => {
  const { name, email } = data;
  return (
    <div>
      {name}
      {email}
    </div>
  );
};

export default Client;
