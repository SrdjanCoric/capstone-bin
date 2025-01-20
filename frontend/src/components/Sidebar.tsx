import { Link } from "react-router-dom";
import data from "../dummy.json";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h5>Your Buckets</h5>

      <ul className="tree-view">
        {data.map((bucket) => {
          return (
            <li key={bucket.id}>
              <Link to={`/web/${bucket.uuid}`}>{bucket.uuid}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
