import Cousine from "../Cousine/Cousine";

const Uncle = ({asset}) => {
  return (
    <div>
      <h2>Uncle</h2>
      <section className="flex">
        <Cousine name={"Rafsan"} asset={asset}></Cousine>
        <Cousine name={"Shohana"}></Cousine>
      </section>
    </div>
  );
};

export default Uncle;