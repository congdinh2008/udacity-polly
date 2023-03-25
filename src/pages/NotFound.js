import { Fragment } from "react";

const NotFound = () => {
  return (
    <Fragment>
      <main className="container d-flex justify-content-center align-item-center">
        <section className="not-found text-center">
            <h1>404</h1>
            <p>Page not found!</p>
        </section>
      </main>
    </Fragment>
  );
};

export default NotFound;
