import PollOverview from "./PollOverview";

const PollCollection = ({ title, questions }) => {
  return (
    <div className="poll-group new-questions my-3">
      <div className="d-flex flex-wrap justify-content-center">
        {questions && questions.map((q) => <PollOverview key={q.id} question={q} />)}
      </div>
    </div>
  );
};

export default PollCollection;
