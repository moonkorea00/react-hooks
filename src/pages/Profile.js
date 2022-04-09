import { useParams } from "react-router-dom";

const Profile = () => {
  const params = useParams();
  console.log(params);
  return <div>Profile page</div>
}

export default Profile;