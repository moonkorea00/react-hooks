import useAsync from '../../hooks/useAsync';

const Client = ({ data }) => {
  const { name, email } = data;

  return (
    <ul>
      <li style={{ cursor: 'pointer' }}>
        <b>name:</b> {name} <b>email:</b> {email}
      </li>
    </ul>
  );
};

export default Client;
