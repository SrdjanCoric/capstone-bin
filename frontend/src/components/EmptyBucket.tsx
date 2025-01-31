import { DOMAIN } from "../services/bucketServices";
import CopyButton from "./CopyButton";

interface EmptyBucketProps {
  uuid: string;
}

export const EmptyBucket = ({ uuid }: EmptyBucketProps) => {
  return (
    <>
      <div className="centered-content" id="empty_basket">
        <h2>Empty basket!</h2>
        <p>
          This basket is empty, send requests to {DOMAIN}
          /api/{uuid}
          <CopyButton domain={DOMAIN} uuid={uuid} /> and they will appear here.
        </p>
      </div>
    </>
  );
};
