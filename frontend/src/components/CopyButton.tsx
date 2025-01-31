import React, { useState } from "react";

type CopyButtonProps = {
  domain: string;
  uuid: string;
};

const CopyButton = ({ domain, uuid }: CopyButtonProps) => {
  const [showCopied, setShowCopied] = useState(false);

  const handleCopy = (e: React.SyntheticEvent) => {
    e.preventDefault();
    navigator.clipboard
      .writeText(`${domain}/api/${uuid}`)
      .then(() => {
        setShowCopied(true);
        setTimeout(() => setShowCopied(false), 2000); // Hide after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <span className="inline-flex items-center gap-2">
      <kbd className="copy-url-btn">
        <span
          onClick={handleCopy}
          className="material-symbols-outlined"
          style={{ fontSize: "14px", cursor: "pointer" }}
        >
          content_copy
        </span>
      </kbd>
      {showCopied && (
        <span
          className="text-xs"
          style={{ fontFamily: '"Pixelated MS Sans Serif", Arial' }}
        >
          Copied!
        </span>
      )}
    </span>
  );
};

export default CopyButton;
