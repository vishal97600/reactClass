import { useEffect, useState } from "react";
import Title from "./../../Component/Title/index";
const About = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (!data) {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          setData(json);
        });
    }
    return () => console.log("hell0");
  }, []);
  return (
    <Title
      className="about-title"
      title="About Us"
      desc="The Home component route does not have a path but has an index attribute."
    />
  );
};

export default About;
