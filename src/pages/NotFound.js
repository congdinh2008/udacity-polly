import { Fragment } from "react";
import Navbar from "../components/Navbar";

const NotFound = () => {
  return (
    <Fragment>
      <Navbar />
      <main className="container">
        <section className="not-found">
            <h1>404</h1>
            <p>Page not found</p>
        </section>
      </main>
    </Fragment>
  );
};

export default NotFound;
