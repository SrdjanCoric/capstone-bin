interface RequestBodyInfoProps {
  body: string,
}

export const RequestBodyInfo = ({body}: RequestBodyInfoProps) => {
  return (
    <>
      <ul>
        <p>{body}</p>
      </ul>
    </>
  );
};
