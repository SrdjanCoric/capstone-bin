// import { useState } from "react";
import CreateBucket from "./CreateBucket";
import Sidebar from "./Sidebar";

const HomePage = () => {
  // const [modalVisible, setModalVisible] = useState(false);

  // const toggleModal = () => {
  //   setModalVisible(!modalVisible);
  // };

  return (
    <div className="homepage">
      <CreateBucket />
      <Sidebar />
    </div>
  );
};

export default HomePage;
