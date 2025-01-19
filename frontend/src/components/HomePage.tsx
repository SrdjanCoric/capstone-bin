import CreateBucket from "./CreateBucket";
import Sidebar from "./Sidebar";

const HomePage = () => {
  return (
    <div className="homepage">
      <CreateBucket />
      <Sidebar />
    </div>
  );
};

export default HomePage;
