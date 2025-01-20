// Expected arguments
// Array containing objects representing requests to bucket
// We need to pass in UUID separately
import { useState } from "react";
import Request from "./Request";
import { EmptyBucket } from "./EmptyBucket";

const data = [
  {
    id: "1",
    method: "POST",
    requestTime: "2025-01-18T22:10:23.352Z",
    headers: {
      "content-type": "application/json",
      "user-agent": "PostmanRuntime/7.41.1",
      accept: "*/*",
      "postman-token": "63fb3b9c-9dee-4f58-80a6-2b3777a8e284",
      host: "localhost:3000",
      "accept-encoding": "gzip, deflate, br",
      connection: "keep-alive",
      "content-length": "38",
    },
    body: '{"new":"yorkshire","key":"values"}',
  },
  {
    id: "2",
    method: "POST",
    requestTime: "2025-01-18T22:09:52.245Z",
    headers: {
      "content-type": "application/json",
      "user-agent": "PostmanRuntime/7.41.1",
      accept: "*/*",
      "postman-token": "16a76c39-2215-4e8a-9bed-ad071fe4a6a5",
      host: "localhost:3000",
      "accept-encoding": "gzip, deflate, br",
      connection: "keep-alive",
      "content-length": "18",
    },
    body: '{"hello":"world"}',
  },
  {
    id: "3",
    method: "GET",
    requestTime: "2025-01-18T22:10:23.352Z",
    headers: {
      "content-type": "application/json",
      "user-agent": "PostmanRuntime/7.41.1",
      accept: "*/*",
      "postman-token": "63fb3b9c-9dee-4f58-80a6-2b3777a8e284",
      host: "localhost:3000",
      "accept-encoding": "gzip, deflate, br",
      connection: "keep-alive",
      "content-length": "38",
    },
    body: '{"new":"yorkshire","key":"values"}',
  },
  {
    id: "1",
    method: "POST",
    requestTime: "2025-01-18T22:10:23.352Z",
    headers: {
      "content-type": "application/json",
      "user-agent": "PostmanRuntime/7.41.1",
      accept: "*/*",
      "postman-token": "63fb3b9c-9dee-4f58-80a6-2b3777a8e284",
      host: "localhost:3000",
      "accept-encoding": "gzip, deflate, br",
      connection: "keep-alive",
      "content-length": "38",
    },
    body: '{"new":"yorkshire","key":"values"}',
  },
  {
    id: "1",
    method: "POST",
    requestTime: "2025-01-18T22:10:23.352Z",
    headers: {
      "content-type": "application/json",
      "user-agent": "PostmanRuntime/7.41.1",
      accept: "*/*",
      "postman-token": "63fb3b9c-9dee-4f58-80a6-2b3777a8e284",
      host: "localhost:3000",
      "accept-encoding": "gzip, deflate, br",
      connection: "keep-alive",
      "content-length": "38",
    },
    body: '{"new":"yorkshire","key":"values"}',
  },
  {
    id: "1",
    method: "POST",
    requestTime: "2025-01-18T22:10:23.352Z",
    headers: {
      "content-type": "application/json",
      "user-agent": "PostmanRuntime/7.41.1",
      accept: "*/*",
      "postman-token": "63fb3b9c-9dee-4f58-80a6-2b3777a8e284",
      host: "localhost:3000",
      "accept-encoding": "gzip, deflate, br",
      connection: "keep-alive",
      "content-length": "38",
    },
    body: '{"new":"yorkshire","key":"values"}',
  },
];

const BucketPage = () => {
  const [state, setState] = useState(data);

  function renderListOrEmpty(stateArray) {
    if (stateArray.length > 0) {
      return (
        <ul className="tree-view">
          {stateArray.map((request) => {
            return <Request key={request.id} request={request} />;
          })}
        </ul>
      )
    } else {
      return (
       <EmptyBucket />
      )
    }
  }

  return (
    <>
      <div>
        <div className="row">
          <div className="col-md-8">
            <h4>Basket: uuid here</h4>
            <p id="requests_link" className="">
              Requests are collected at{" "}
              <kbd className="basket_uri">https://liamturn.dev/uuid here</kbd>
              <kbd className="copy-url-btn">
                <span
                  title="Copy URL"
                  className="glyphicon glyphicon-copy"
                ></span>
              </kbd>
            </p>
          </div>
          <div className="col-md-3 col-md-offset-1">
            <h4>
              <abbr title="Current requests count (Total count)">Requests</abbr>
              : <span id="requests_count">Array length here</span>
            </h4>
          </div>
        </div>
      </div>
      <hr></hr>
      {renderListOrEmpty(state)}
    </>
  );
};

export default BucketPage;
