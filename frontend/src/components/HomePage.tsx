import { useState } from "react";
import CreateBucket from "./CreateBucket";
import Sidebar from "./Sidebar";
import Popup from "./Popup";

const HomePage = () => {
  const [popupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!popupVisible);
  };

  return (
    <div className="homepage">
      {popupVisible ? (
        <Popup togglePopup={togglePopup} />
      ) : (
        <CreateBucket togglePopup={togglePopup} />
      )}
      <Sidebar />
    </div>
  );
};

export default HomePage;
