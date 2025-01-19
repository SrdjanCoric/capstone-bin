import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="title-bar">
      <Link to={"/"}>
        <div className="title-bar-text">Request Buckets NY</div>
      </Link>
      <div className="title-bar-controls"></div>
    </div>
  );
};

// link to always go to home page in the left corner
//
export default Header;
