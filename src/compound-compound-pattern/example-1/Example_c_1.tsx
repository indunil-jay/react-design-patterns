import Counter from "./Counter";

const Example_c_1 = () => {
  return (
    <div>
      <h1>Compound Component Patterns</h1>

      <Counter>
        <Counter.Label>My Counter</Counter.Label>
        <Counter.Decrease icon="-" />
        <Counter.Count />
        <Counter.Increase icon="+" />
        <Counter.Reset />
      </Counter>
    </div>
  );
};

export default Example_c_1;
