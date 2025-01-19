import { RequestData } from "../types";
import { useState } from "react";

interface RequestProps {
  request: RequestData;
  key: string;
}

const Request = ({ request }: RequestProps) => {
  const [displayHeaders, setDisplayHeaders] = useState(false);
  const [displayBody, setDisplayBody] = useState(false);

  return (
    <div className="forum-post">
      <div className="post-info">
        <p className="name">{request.method}</p>
        <p className="timestamp">{request.requestTime}</p>
      </div>

      <div className="post-content">
        <div className="box">
          <p>/UUID ( add button to copy request data)</p>
        </div>

        {/* header box */}
        <div className="box">
          <button
            className="toggle-button"
            onClick={() => setDisplayHeaders(!displayHeaders)}
          >
            Headers
          </button>
          {displayHeaders && (
            <div className="box-content">
              <p>Headers go here.</p>
            </div>
          )}
        </div>

        {/* body box */}
        <div className="box">
          <button
            className="toggle-button"
            onClick={() => setDisplayBody(!displayBody)}
          >
            Body
          </button>
          {displayBody && (
            <div className="box-content">
              <p>Body goes here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Request;
