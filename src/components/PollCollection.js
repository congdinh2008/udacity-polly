import PollItem from "./PollItem";

const PollCollection = ({ title }) => {
  return (
    <div className="card poll-group new-questions my-3">
      <div className="card-header text-center">{title}</div>
      <div className="card-body d-flex justify-content-center">
        <PollItem />
        <PollItem />
        <PollItem />
        <PollItem />
      </div>
    </div>
  );
};

export default PollCollection;
