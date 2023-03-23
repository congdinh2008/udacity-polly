import PollOverview from "./PollOverview";

const PollCollection = ({ title }) => {
  return (
    <div className="card poll-group new-questions my-3">
      <div className="card-header text-center">{title}</div>
      <div className="card-body d-flex justify-content-center">
        <PollOverview />
        <PollOverview />
        <PollOverview />
        <PollOverview />
      </div>
    </div>
  );
};

export default PollCollection;
