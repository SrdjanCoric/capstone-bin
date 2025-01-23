import { RequestData } from "../types";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { TimeStamp } from "./TimeStamp";
import { BodyBox } from "./BodyBox";
import { HeaderBox } from "./HeaderBox";

interface RequestProps {
  request: RequestData;
  key: string;
}

const Request = ({ request }: RequestProps) => {
  const [displayHeaders, setDisplayHeaders] = useState(false);
  const [displayBody, setDisplayBody] = useState(false);
  const uuid = useParams().uuid;

  return (
    <div className="forum-post">
      <div className="post-info">
        <p className="name">[{request.method}]</p>
        <TimeStamp timestamp={request.requestTime} />
      </div>
      <div className="post-content">
        <div className="box">
          <p>/{uuid} </p>
        </div>

        <HeaderBox
          setDisplayHeaders={setDisplayHeaders}
          displayHeaders={displayHeaders}
          requestHeaderInfo={request.headers}
        />

        <BodyBox
          setDisplayBody={setDisplayBody}
          displayBody={displayBody}
          requestBodyInfo={request.body}
        />
      </div>
    </div>
  );
};

export default Request;
