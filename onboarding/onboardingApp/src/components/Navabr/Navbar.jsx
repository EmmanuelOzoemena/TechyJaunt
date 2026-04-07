import { IoIosNotificationsOutline } from "react-icons/io";
import { WiCloud } from "react-icons/wi";
import profilePicture from "../../assets/profile-pic.jpeg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <div className="logo-icon"></div>
        <span> Onboarding App</span>
      </div>

      <div className="search">
        <input type="search" placeholder="Search..." />
      </div>

      <div className="icons">
        <div>
          <WiCloud size={35} />
        </div>
        <div>
          <IoIosNotificationsOutline size={35} />
        </div>

        <div className="profile-pic">
          <img src={profilePicture} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
