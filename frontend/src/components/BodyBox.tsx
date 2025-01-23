import { RequestBodyInfo } from "./RequestBodyInfo";

interface BodyBoxProps {
  setDisplayBody: React.Dispatch<React.SetStateAction<boolean>>;
  displayBody: boolean;
  requestBodyInfo: string
}

export const BodyBox =({setDisplayBody, displayBody, requestBodyInfo}: BodyBoxProps) => {

  return (
    <>
      <div className="box">
          <button
            className="toggle-button"
            onClick={() => setDisplayBody(!displayBody)}
          >
            Body
          </button>
          {displayBody && (
            <div className="box-content">
              <RequestBodyInfo body={requestBodyInfo} />
            </div>
          )}
        </div>
    </>
  )
}
