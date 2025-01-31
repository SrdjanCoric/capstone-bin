// Expected arguments
// Array containing objects representing requests to bucket
// We need to pass in UUID separately
import { DOMAIN } from "../services/bucketServices";
import { useState, useEffect } from "react";
import { EmptyBucket } from "./EmptyBucket";
import { RequestData } from "../types";
import { useParams } from "react-router-dom";
import { getBucketData } from "../services/bucketServices";
import { List } from "./List";
import LoadingSpinner from "./LoadingSpinner";
import CopyButton from "./CopyButton";

const BucketPage = () => {
  const uuid = useParams().uuid;
  const [requests, setRequests] = useState<RequestData[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Add this state

  useEffect(() => {
    if (uuid) {
      const fetchData = async () => {
        try {
          const data = await getBucketData(uuid);

          setRequests(data);
        } catch (e: unknown) {
          console.error(e);
        } finally {
          setIsLoading(false);
        }
      };
      fetchData();
    }
  }, [uuid]);
  if (isLoading) {
    return <LoadingSpinner />; // Show loading spinner while loading
  }

  if (requests.length === 0) {
    return <EmptyBucket uuid={uuid!} />;
  }
  return (
    <>
      <div>
        <div className="window" style={{ marginTop: "50px" }}>
          <div className="title-bar">
            <div className="title-bar-text">Bucket Central</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Maximize"></button>
              <button aria-label="Close"></button>
            </div>
          </div>
          <div className="window-body">
            <div className="centered-content">
              <h4>Welcome to your bucket: {uuid}</h4>
              <h4>
                Requests : <span id="requests_count">{requests.length}</span>
              </h4>
              <p>
                {`Requests are collected at ${DOMAIN}/api/${uuid}`}
                <CopyButton domain={DOMAIN} uuid={uuid} />
              </p>
              <p>
                Scroll through your requests, inspect the headers, and body
                content
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      {requests && <List requests={requests} />}
      {!requests && <EmptyBucket uuid={uuid!} />}
    </>
  );
};

export default BucketPage;
