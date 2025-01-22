import { RequestData } from "../types";
import { useState } from "react";
import { useParams } from 'react-router-dom';

interface RequestProps {
  request: RequestData;
  key: string;
}

const Request = ({ request }: RequestProps) => {
  const [displayHeaders, setDisplayHeaders] = useState(false);
  const [displayBody, setDisplayBody] = useState(false);
  const uuid = useParams().uuid;

  function formatHeaderInfo(headers: string) {
      if (headers.length > 0) {
        let parsed = JSON.parse(headers) // object
        let entries = Object.entries(parsed)

        return (
          <ul>
             {entries.map((entry, index) => {
              return <li key={index}>{entry[0]} : {entry[1] as any}</li>;
            })}
          </ul>
        )
      }
    }

  function formatBodyInfo(bodyInfo: string) {
    return (
      <ul>
        <p>{bodyInfo}</p>
      </ul>
    )
  }

  function formatTime(timeString: string) {
    let [date, time] = timeString.split('T');
    time = time.slice(0, time.length - 1);

    const [year, month, day] = date.split('-');
    date = `${month}/${day}/${year}`;

    return (
      <>
        {time}
        <br></br>
        {date}
      </>
    )
  }

  const copyLinkToClipboard = (e: React.SyntheticEvent) => {
    e.preventDefault();
    navigator.clipboard
      .writeText(`localhost:5173/api/${uuid}`)
      .then(() => {
        alert("Copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="forum-post">
      <div className="post-info">
        <p className="name">[{request.method}]</p>
        <p className="timestamp">{formatTime(request.requestTime)}</p>
      </div>

      <div className="post-content">
        <div className="box">
          <p>/{uuid} </p>
          <span
              onClick={(e) => {
                copyLinkToClipboard(e);
              }}
              className="material-symbols-outlined"
              style={{ fontSize: "14px", cursor: "pointer" }}
            >
              content_copy
          </span>
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
              {formatHeaderInfo(request.headers)}
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
              {formatBodyInfo(request.body)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Request;
