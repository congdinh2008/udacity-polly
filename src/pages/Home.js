import { useEffect } from "react";
import { connect } from "react-redux";
import handleReceiveData from "../actions/shared";
import PollCollection from "../components/PollCollection";

const Home = (props) => {
  useEffect(() => {
    props.dispatch(handleReceiveData());
  }, []);
  return (
    <section className="home">
      <PollCollection title={"New Questions"} />
      <PollCollection title={"Done"} />
    </section>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
});

export default connect(mapStateToProps)(Home);
