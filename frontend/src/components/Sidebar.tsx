import { Link } from "react-router-dom";
import data from "../dummy.json";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h5>Your Buckets</h5>

      <ul className="tree-view">
        {data.map((bucket) => {
          return (
            <li>
              <Link key={bucket.id} to={`/web/${bucket.uuid}`}>
                {bucket.uuid}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* <ul className="tree-view"> */}
      {/* <Link to={`/web/${bucket.uuid}`}></Link> */}
      {/* This is where each bucket UUID will be listed */}
      {/* <li>UUID</li>
        <li>UUID</li>
        <li>UUID</li>
      </ul> */}
    </div>
  );
};

export default Sidebar;
