import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ title, description, buttonLink, linkDestination }) => {
  return (
    <div className="sidebar">
      <h3>{title}</h3>
      <p>{description}</p>

      <Link to={linkDestination} className="sign-in">
        {buttonLink}
      </Link>
    </div>
  );
};

export default Sidebar;
