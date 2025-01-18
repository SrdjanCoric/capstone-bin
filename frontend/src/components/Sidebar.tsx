const Sidebar = () => {
  return (
    <div className="sidebar">
      <h5>Your Buckets</h5>
      <ul className="tree-view">
        {/* This is where each bucket UUID will be listed */}
        <li>UUID</li>
        <li>UUID</li>
        <li>UUID</li>
      </ul>
    </div>
  );
};

export default Sidebar;
