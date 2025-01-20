import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CreateBucket from "./CreateBucket";
import Sidebar from "./Sidebar";
import { getAllBuckets } from "../services/bucketServices";

const HomePage = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [UUIDs, setUUIDs] = useState<string[]>([]);
  const [currUUID, setCurrUUID] = useState("");

  useEffect(() => {
    const UUIDs = getAllBuckets();
    setUUIDs(UUIDs);
  }, []);

  const handleSuccess = (newId: string) => {
    const updatedUUIDs = [...UUIDs, newId];
    setUUIDs(updatedUUIDs);
    setCurrUUID(newId);
    setSuccessMessage(`Success! Your BucketID is:`);
  };

  return (
    <div className="homepage">
      <div className="create-bucket-container">
        <CreateBucket handleSuccess={handleSuccess} />
        {successMessage && (
          <div className="success">
            {successMessage}&nbsp;
            <Link to={`/web/${currUUID}`}>{currUUID}</Link>
          </div>
        )}
      </div>
      <Sidebar UUIDs={UUIDs} />
    </div>
  );
};

export default HomePage;
