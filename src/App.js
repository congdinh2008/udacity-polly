import { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import handleReceiveData from "./actions/shared";
import Navbar from "./components/Navbar";
import CreatePoll from "./pages/CreatePoll";
import Home from "./pages/Home";
import LeaderBoard from "./pages/LeaderBoard";
import Login from "./pages/Login";
import PollItem from "./pages/PollItem";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleReceiveData());
  }, []);
  return (
    <Fragment>
      <Navbar />
      <main className="container">
        {props.loading === true ? null : (
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/leader-board" element={<LeaderBoard />} />
            <Route path="/new" element={<CreatePoll />} />
            <Route path="/questions/:id" element={<PollItem />} />
          </Routes>
        )}
      </main>
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
});

export default connect(mapStateToProps)(App);
