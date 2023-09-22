import { useContext } from "react";
import Cousine from "../Cousine/Cousine";
import { MoneyContext } from "../Grandpa/Grandpa";
const Aunty = () => {

const [money, setMoney] = useContext(MoneyContext)

  return (
    <div>
      <h2>Aunty</h2>
      <section className="flex">
        <Cousine name={"Mumshad"}></Cousine>
        <Cousine name={"Rubaya"}></Cousine>
        <p>Money: {money}</p>
        <button onClick={() => setMoney(money + 1000)}>Add 100</button>
      </section>
    </div>
  );
};

export default Aunty;