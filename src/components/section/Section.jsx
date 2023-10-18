const Section = ({ title, items }) => {
  const listItems = items.map((item) => {
    return <li>{item}</li>;
  });
  return (
    <section>
      <h3>{title}</h3>
      <ul>{listItems}</ul>
    </section>
  );
};

export default Section;
