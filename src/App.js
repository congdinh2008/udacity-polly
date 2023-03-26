import { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import handleReceiveData from "./actions/shared";
import Navbar from "./components/Navbar";
import RouteURLs from "./constants/routeURLs";
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
          <Route path={RouteURLs.LOGIN_URL} element={<Login />} />
          <Route
            path={RouteURLs.HOME_URL}
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route index element={<Home />} />
          <Route
            path={RouteURLs.LEADER_BOARD_URL}
            element={
              <ProtectedRoute>
                <LeaderBoard />
              </ProtectedRoute>
            }
          />
          <Route
            path={RouteURLs.CREATE_POLL_URL}
            element={
              <ProtectedRoute>
                <CreatePoll />
              </ProtectedRoute>
            }
          />
          <Route
            path={RouteURLs.POLL_ITEM_URL}
            element={
              <ProtectedRoute>
                <PollItem />
              </ProtectedRoute>
            }
          />
          <Route path={RouteURLs.NOT_FOUND_URL} element={<NotFound />} />
          <Route path="*" element={<Navigate to={RouteURLs.NOT_FOUND_URL} />} />
        </Routes>
      </main>
    </Fragment>
  );
};

export default connect()(App);
