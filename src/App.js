import { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
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
          <Route path={RouteURLs.HOME_URL} element={<ProtectedRoute redirectTo={RouteURLs.LOGIN_URL} />}>
            <Route index element={<Home />} />
            <Route path={RouteURLs.LEADER_BOARD_URL} element={<LeaderBoard />} />
            <Route path={RouteURLs.CREATE_POLL_URL} element={<CreatePoll />} />
            <Route path={RouteURLs.POLL_ITEM_URL} element={<PollItem />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Fragment>
  );
};

export default connect()(App);
