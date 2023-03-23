import moment from "moment";

const PollOverview = ({ question }) => {
  return (
    <div className="poll-overview text-center">
      <div className="poll-overview-info">
        <h4 className="poll-overview-author">{question.author}</h4>
        <span className="poll-overview-date">{moment(question.timestamp).format('HH:MM A | MM-DD-YYYY')}</span>
      </div>
      <button className="btn btn-light w-100">Show</button>
    </div>
  );
};

export default PollOverview;
