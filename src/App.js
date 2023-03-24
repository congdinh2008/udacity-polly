import { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import handleReceiveData from "./actions/shared";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./context/ProtectedRoute";
import CreatePoll from "./pages/CreatePoll";
import Home from "./pages/Home";
import LeaderBoard from "./pages/LeaderBoard";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import PollItem from "./pages/PollItem";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleReceiveData());
  }, [props]);

  return (
    <Fragment>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedRoute redirectTo="/login" />}>
            <Route index element={<Home />} />
            <Route path="leader-board" element={<LeaderBoard />} />
            <Route path="new" element={<CreatePoll />} />
            <Route path="question/:id" element={<PollItem />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </main>
    </Fragment>
  );
};

export default connect()(App);
