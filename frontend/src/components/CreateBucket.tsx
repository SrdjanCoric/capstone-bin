const CreateBucket = () => {
  return (
    <div className="window">
      <div className="title-bar">
        <div className="title-bar-text">Create New Bucket</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div className="window-body">
        <p>Create a bucket to collect and inspect HTTP requests!</p>
      </div>
      <div className="bucket-button">
        <button>New Bucket</button>
      </div>
    </div>
  );
};

export default CreateBucket;
