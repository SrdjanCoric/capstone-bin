import { RequestHeaderInfo } from "./RequestHeaderInfo";

interface HeaderBoxProps {
  setDisplayHeaders: React.Dispatch<React.SetStateAction<boolean>>;
  displayHeaders: boolean;
  requestHeaderInfo: string
}

export const HeaderBox = ({setDisplayHeaders, displayHeaders, requestHeaderInfo}: HeaderBoxProps) => {
  return (
    <>
      <div className="box">
          <button
            className="toggle-button"
            onClick={() => setDisplayHeaders(!displayHeaders)}
          >
            Headers
          </button>
          {displayHeaders && (
            <div className="box-content">
            <RequestHeaderInfo headers={requestHeaderInfo}/>
            </div>
          )}
      </div>
    </>
  )
}
