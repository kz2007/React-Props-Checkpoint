import './App.css';
import MyProfile from './/profile/profile.js';

const MyProfilePhoto = "https://tabib.ae/uploads/profile/free-profile-photo-whatsapp-4_1617693292_1625640135.png"
const ImageSize = {  width: "240px", height: "240px"}

const ProfileImage = () =>
{
  return (
    <img src={MyProfilePhoto} style={ImageSize}/>
  );
}
function App() {
  const handleNameFunction  = name => alert(name);
  return (
    <>
      <MyProfile fullName="James Robinson" bio="A very good developer ." profession="Developer" handleName ={handleNameFunction}>
        <ProfileImage />
      </MyProfile>
    </>
  );
}

export default App;