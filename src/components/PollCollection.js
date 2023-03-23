import PollOverview from "./PollOverview";

const PollCollection = ({ title, questions }) => {
  return (
    <div className="card poll-group new-questions my-3">
      <div className="card-header text-center">{title}</div>
      <div className="card-body d-flex justify-content-center">
        {questions && questions.map((q) => <PollOverview key={q.id} question={q} />)}
      </div>
    </div>
  );
};

export default PollCollection;
