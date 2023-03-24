import { useEffect, useState } from "react";
import { connect } from "react-redux";

const LeaderBoard = ({ users, authedUser }) => {
  const [updatedUsers, setUpdatedUsers] = useState([]);

  useEffect(() => {
    setUpdatedUsers(
      users
        .map((user) => {
          const answers = Object.keys(user.answers);
          return {
            id: user.id,
            name: user.name,
            totalAnswers: answers.length,
            totalQuestion: user.questions.length,
            total: user.questions.length + answers.length,
          };
        })
        .sort((a, b) => b.total - a.total)
    );
  }, [users]);

  return (
    <section className="leader-section d-flex justify-content-center">
      <table className="leader-board">
        <thead>
          <tr>
            <th>User</th>
            <th>Answered</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {updatedUsers &&
            updatedUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.totalAnswers}</td>
                <td>{user.totalQuestion}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
};

const mapStateToProps = ({ users, authedUser }) => {
  return {
    users: Object.keys(users).map((key) => users[key]),
    authedUser,
  };
};
export default connect(mapStateToProps)(LeaderBoard);
