import useAsync from '../../hooks/useAsync';

const SingleClient = ({ id }) => {
  const [state] = useAsync(() => getData(id), [id]);
  const { data: datum } = state;

  const getData = async id => {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return data.json();
  };
  console.log('DATUM', datum);

  return (
    <div>
      <b>Client Information</b>
      {datum && (
        <>
          <p>
            <b>name:</b> {datum?.name} <b>email:</b> {datum?.email}
          </p>
        </>
      )}
    </div>
  );
};

export default SingleClient;
