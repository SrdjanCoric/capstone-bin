// Expected arguments
// Array containing objects representing requests to bucket
// We need to pass in UUID separately
import { useState, useEffect } from "react";
import Request from "./Request";
import { EmptyBucket } from "./EmptyBucket";
import { RequestData } from "../types";
import { useParams } from 'react-router-dom';
import { getBucketData } from "../services/bucketServices";

const BucketPage = () => {
  const uuid = useParams().uuid;
  const [requests, setRequests] = useState<RequestData[]>([])

  useEffect(() => {
    if (uuid) {
      const fetchData = async () => {
      try {
        const data = await getBucketData(uuid);

        setRequests(data)
      } catch (e: unknown) {
        console.error(e)
      }
    }
      fetchData();
    }
  }, [])

  function renderList(data: RequestData[]) {
    if (data.length > 0) {
      return (
        <ul className="tree-view">
          {data.map((request) => {
            return <Request key={request.id} request={request} />;
          })}
        </ul>
      )
    }
  }

  return (
    <>
      <div>
        <div className="window">
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
              <h4>Requests
              : <span id="requests_count">{requests.length}</span></h4>
              <p>
                Requests are collected at https://liamturn.dev/{uuid}
                <kbd className="copy-url-btn">
                  <span
                    title="Copy URL"
                    className="glyphicon glyphicon-copy"
                  ></span>
              </kbd>
              </p>
              <p>
                Scroll through your requests, inspect the headers, and body content
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
     <div>{renderList(requests)}</div>
      {!requests[0] && (
        <EmptyBucket />
      )}
    </>
  );
};

export default BucketPage;
