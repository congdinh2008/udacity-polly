const LeaderBoard = () => {
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
          <tr>
            <td>User 01</td>
            <td>4</td>
            <td>2</td>
          </tr>
          <tr>
            <td>User 02</td>
            <td>5</td>
            <td>3</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default LeaderBoard;
