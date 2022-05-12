import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';

const Home = () => {
  const navigate = useNavigate();
  // const id = useParams();
  // const params = useParams()
  return (
    <>
      <div>main</div>
      <button>click</button>
      <div>
        {DATA.map(item => {
          return (
            <button
              key={item.id}
              onClick={() => {
                navigate(`/profile/${item.id}`);
                console.log(`${item.id}`);
              }}
            >
              {item.name}
            </button>
          );
        })}
      </div>
      <div style={{width:'100px', height: '100px',border: '1px solid red', display:'flex', justifyContent:'space-around', }}>
        <div><button >dd</button></div>
        <span>dd</span>
      </div>
    </>
  );
};

export default Home;

const DATA = [
  { id: 1, name: 'hi' },
  { id: 2, name: 'hi2' },
];
