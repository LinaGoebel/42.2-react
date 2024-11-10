import { profileData } from "./data";
import "./style.css";
import avatar from "./Elsa.jpg"


function ProfileCard (){
    return (
        <div className="profile-card">
            <img className="avatar-card" src={avatar} alt="User Avatar" />
            <h2 className="name-card">{profileData.name}</h2>
            <p className="occupation-card">{profileData.occupation}</p>
            <p className="hobbies-card">{profileData.hobbies.map((hobby, index) =>
            <li key={index}>{hobby}</li>)}</p>
        </div>
    );
}

export default ProfileCard;