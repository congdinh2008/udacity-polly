import { Fragment } from "react";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./context/ProtectedRoute";
import CreatePoll from "./pages/CreatePoll";
import Home from "./pages/Home";
import LeaderBoard from "./pages/LeaderBoard";
import Login from "./pages/Login";
import PollItem from "./pages/PollItem";

const App = () => {
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
          </Route>
        </Routes>
      </main>
    </Fragment>
  );
};

export default connect()(App);
