import { useState } from "react";
import Layout from "../components/Layout/Layout";
import DisplayCount from "../components/DIsplaycount/Displaycount";
import Buttons from "../components/Buttons/Buttons";
import UpdateIncrementDecrement from "../components/UpdateIncrementDecrement/UpdateIncrementDecrement";

const About = () => {
  let [count, setcout] = useState(0);
  const [incrementValue, setIncrementValue] = useState(10);
  const [decrementValue, setDecrementValue] = useState(5);

  // const o = count ?? 50;
  // console.log(o);

  const increment = () => {
    setcout(count + incrementValue);
  };
  const decrement = () => {
    setcout(count - decrementValue);
  };

  const handelIncrement = (e) => {
    setIncrementValue(parseInt(e.target.value));
  };
  const handelDecrementValue = (e) => {
    setDecrementValue(parseInt(e.target.value));
  };
  return (
    <Layout>
      <>
        <h3>This is About page</h3>
        <DisplayCount count={count} />
        <UpdateIncrementDecrement
          incrementValue={incrementValue}
          handelIncrement={handelIncrement}
          decrementValue={decrementValue}
          handelDecrementValue={handelDecrementValue}
        />
        <Buttons increment={increment} decrements={decrement} />
      </>
    </Layout>
  );
};
export default About;
