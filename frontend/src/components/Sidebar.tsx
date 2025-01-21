import { Link } from "react-router-dom";

interface SidebarProps {
  UUIDs: string[];
}

const Sidebar = ({ UUIDs }: SidebarProps) => {
  return (
    <aside>
      <ul className="tree-view">
        <li>
          <details open>
            <summary>Your Buckets:</summary>
            <ul>
              {UUIDs.map((bucket, i) => (
                <li key={i} className="bucket-id">
                  <Link to={`/web/${bucket}`}>{bucket}</Link>
                </li>
              ))}
            </ul>
          </details>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
