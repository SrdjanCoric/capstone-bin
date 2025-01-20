interface PopupProps {
  togglePopup: () => void;
}

const Popup = ({ togglePopup }: PopupProps) => {
  return (
    <div className="window">
      <div className="title-bar">
        <div className="title-bar-text">Success!</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close" onClick={togglePopup}></button>
        </div>
      </div>
      <div className="window-body">
        <p>Bucket 'UUID' was successfully created!</p>
        <button>Go to Bucket</button>
      </div>
    </div>
  );
};

export default Popup;
