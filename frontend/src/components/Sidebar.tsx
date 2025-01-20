import { Link } from "react-router-dom";

interface SidebarProps {
  UUIDs: string[];
}

const Sidebar = ({ UUIDs }: SidebarProps) => {
  return (
    <div className="sidebar">
      <h5>Your Buckets</h5>

      <ul className="tree-view">
        {UUIDs.map((bucket, i) => {
          return (
            <li key={i}>
              <Link to={`/web/${bucket}`}>{bucket}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
