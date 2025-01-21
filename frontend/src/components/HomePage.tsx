import { useState, useEffect } from "react";
import CreateBucket from "./CreateBucket";
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
        <CreateBucket
          handleSuccess={handleSuccess}
          UUIDs={UUIDs}
          successMessage={successMessage}
          currUUID={currUUID}
        />
      </div>
    </div>
  );
};

export default HomePage;
