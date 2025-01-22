interface EmptyBucketProps {
  uuid: string;
}

export const EmptyBucket = ({ uuid }: EmptyBucketProps) => {
  return (
    <>
      <div className="centered-content" id="empty_basket">
        <h2>Empty basket!</h2>
        <p>
          This basket is empty, send requests to{" "}
          {`https://liamturner.dev/api/${uuid}`} and they will appear here.
        </p>
      </div>
    </>
  );
};
