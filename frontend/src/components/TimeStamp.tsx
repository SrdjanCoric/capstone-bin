interface TimeStampProps {
  timestamp: string;
}

export const TimeStamp = ({ timestamp }: TimeStampProps) => {
    let [date, time] = timestamp.split("T");
    time = time.slice(0, time.length - 1);

    const [year, month, day] = date.split("-");
    date = `${month}/${day}/${year}`;

  return (
    <>
      {time}
        <br></br>
      {date}
    </>
  );
};
