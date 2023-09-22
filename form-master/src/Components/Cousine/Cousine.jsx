import Friend from "../Friend/Friend";
import Special from "../Special/Special";

const Cousine = ({name, asset}) => {
  return (
    <div>
      <h2>Cousine</h2>
      <p>{name}</p>
      <section>
        { asset && <Special asset={asset}></Special>}
        {name === 'Rubaya' && <Friend></Friend>}
      </section>
    </div>
  );
};

export default Cousine;