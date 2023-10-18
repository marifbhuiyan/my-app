import Layout from "../components/Layout/Layout";
import Section from "../components/section/Section";

const Home = () => {
  const experance = [
    "experance item 1",
    "experance item 2",
    "experance item 3",
    "experance item 4",
  ];
  const education = [
    "Eduction title 01",
    "Eduction title 02",
    "Eduction title 03",
    "Eduction title 04",
  ];
  return (
    <Layout>
      <Section title="Education" items={education} />
      <Section title="Experrance" items={experance} />
    </Layout>
  );
};

export default Home;
