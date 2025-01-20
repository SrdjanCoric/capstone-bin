import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="title-bar header">
      <Link to={"/"}>
        <div className="title-bar-text">Request Buckets NY</div>
      </Link>
    </div>
  );
};

export default Header;
