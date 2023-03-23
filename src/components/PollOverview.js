import moment from "moment";
import { Link } from "react-router-dom";

const PollOverview = ({ question }) => {
  return (
    <div className="poll-overview text-center">
      <div className="poll-overview-info">
        <h4 className="poll-overview-author">{question.author}</h4>
        <span className="poll-overview-date">{moment(question.timestamp).format('HH:MM A | MM-DD-YYYY')}</span>
      </div>
      <Link className="btn btn-light w-100" to={`/question/${question.id}`}>Show</Link>
    </div>
  );
};

export default PollOverview;
