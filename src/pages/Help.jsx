import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";

const Help = () => {
  const [state, setstate] = useState({ name: "" });

  // const [name, setname] = useState();

  useEffect(() => {
    setTimeout(() => {
      setstate({ name: " Arif Bhuiyan" });
    }, 1 * 1000);

    console.log("settimeout caled");
  }, []);

  console.log("rendering");
  const data = [
    { name: "Arif Bhuiyan", email: "arif@gmail.com" },
    { name: "Rakib Bhuiyan", email: "rakib@gmail.com" },
    { name: "Sakib Bhuiyan", email: "sakib@gmail.com" },
    { name: "Sakib Bhuiyan", email: "sakib@gmail.com" },
    { name: "Sakib Bhuiyan", email: "sakib@gmail.com" },
    { name: "Sakib Bhuiyan", email: "sakib@gmail.com" },
  ];
  return (
    <Layout>
      <h1>Hello {state.name ? state.name : "Gust"} This is Help Page</h1>
      {state.name ? (
        <h1>Hello {state.name} I am Help Page </h1>
      ) : (
        <h1>Hello Gust I am Help Page</h1>
      )}

      {data.length > 0 ? (
        <ul>
          <li>
            {data.map((item) => {
              return (
                <li>
                  {" "}
                  {item.name}, {item.email}
                </li>
              );
            })}
          </li>
        </ul>
      ) : (
        <p>thare is no data</p>
      )}
    </Layout>
  );
};

export default Help;
