import PollCollection from "../components/PollCollection";

const Home = () => {
  return (
    <section className="home">
      <PollCollection title={"New Questions"} />
      <PollCollection title={"Done"} />
    </section>
  );
};

export default Home;
