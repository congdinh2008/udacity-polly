import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreatePoll from "./pages/CreatePoll";
import Home from "./pages/Home";
import LeaderBoard from "./pages/LeaderBoard";
import Login from "./pages/Login";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/leader-board" element={<LeaderBoard />} />
          <Route path="/new" element={<CreatePoll />} />
        </Routes>
      </main>
    </Fragment>
  );
};

export default App;
