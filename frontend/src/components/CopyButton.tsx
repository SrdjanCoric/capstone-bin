import React, { useState } from "react";

type CopyButtonProps = {
  domain: string;
  uuid: string;
};

const CopyButton = ({ domain, uuid }: CopyButtonProps) => {
  const [showCopied, setShowCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard
      .writeText(`${domain}/api/${uuid}`)
      .then(() => {
        setShowCopied(true);
        setTimeout(() => setShowCopied(false), 1500);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <span
      style={{
        position: "relative",
        display: "inline-block",
        verticalAlign: "middle",
      }}
    >
      {showCopied && (
        <span
          style={{
            position: "absolute",
            right: "-25px",
            top: "-20px",
            fontFamily: '"Pixelated MS Sans Serif", Arial',
            fontSize: "11px",
            zIndex: 50,
            whiteSpace: "nowrap",
            display: "block",
          }}
        >
          Copied
        </span>
      )}
      <kbd className="copy-url-btn">
        <span
          onClick={handleCopy}
          className="material-symbols-outlined"
          style={{ fontSize: "14px", cursor: "pointer" }}
        >
          content_copy
        </span>
      </kbd>
    </span>
  );
};

export default CopyButton;
