interface CreateBucketProps {
  togglePopup: () => void;
}

const CreateBucket = ({ togglePopup }: CreateBucketProps) => {
  return (
    <div className="window">
      <div className="title-bar">
        <div className="title-bar-text">Create New Bucket</div>
        <div className="title-bar-controls"></div>
      </div>
      <div className="window-body">
        <p>Create a bucket to collect and inspect HTTP requests!</p>
      </div>
      <div className="bucket-button">
        <button onClick={togglePopup}>New Bucket</button>
      </div>
    </div>
  );
};

export default CreateBucket;
