import './App.css';
import MyProfile from './/profile/profile.js';

const MyProfilePhoto = "https://tabib.ae/uploads/profile/free-profile-photo-whatsapp-4_1617693292_1625640135.png"
const ImageSize = {  width: "360px", height: "360px"}
const JamesProfile ={fullName: "James Robinson", bio: "A very good developer .", profession: "Developer"}


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
      <MyProfile fullName={JamesProfile.fullName} bio={JamesProfile.bio} profession={JamesProfile.profession} handleName ={handleNameFunction}>
        <ProfileImage />
      </MyProfile>
    </>
  );
}

export default App;
