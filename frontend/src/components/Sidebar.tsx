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
                <li key={i}>
                  <Link to={`/web/${bucket}`}>
                    {<span className="bucket-id">{bucket}</span>}
                  </Link>
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
