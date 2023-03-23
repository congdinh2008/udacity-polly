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

const App = (props) => {
  return (
    <Fragment>
      <Navbar />
      <main className="container">
        {props.loading === true ? null : (
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/leader-board"
              element={
                <ProtectedRoute>
                  <LeaderBoard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/new"
              element={
                <ProtectedRoute>
                  <CreatePoll />
                </ProtectedRoute>
              }
            />
            <Route
              path="/question/:id"
              element={
                <ProtectedRoute>
                  <PollItem />
                </ProtectedRoute>
              }
            />
          </Routes>
        )}
      </main>
    </Fragment>
  );
};

export default connect()(App);
