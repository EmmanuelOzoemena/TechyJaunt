import { Link } from "react-router-dom";
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Welcome Back</h3>
      <p>To keep connected with us please login with your personal info</p>

      <Link to="/login" className="sign-in">
        Sign in
      </Link>
    </div>
  );
};

export default Sidebar;
