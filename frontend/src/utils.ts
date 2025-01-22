export const copyLinkToClipboard = (
  e: React.SyntheticEvent,
  domain: string,
  uuid: string
) => {
  e.preventDefault();
  navigator.clipboard
    .writeText(`${domain}/api/${uuid}`)
    .then(() => {
      alert("Copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
};
