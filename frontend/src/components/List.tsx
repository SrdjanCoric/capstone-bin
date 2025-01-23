import { RequestData } from "../types";
import Request from "./Request";

interface ListProps {
  requests: RequestData[],
}

export const List = ({ requests }: ListProps) => {
  return (
    <>
        <ul className="tree-view">
          {requests.map((request) => {
            return <Request key={request.id} request={request} />;
          })}
        </ul>
    </>
  );
};
