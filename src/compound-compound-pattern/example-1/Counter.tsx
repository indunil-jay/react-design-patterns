import { createContext, useContext, useState } from "react";
type Props = {
  children: React.ReactNode;
};

type TCountProps = {
  icon: string;
};

type TCounter = {
  count: number;
  increase: () => void;
  decrease: () => void;
  reset: () => void;
};

// 1. Create a context
const CounterContext = createContext<TCounter | undefined>(undefined);

// 2. Create a parent component
const Counter = ({ children }: Props) => {
  const [count, setCount] = useState<number>(0);
  const increase = () => setCount((c) => c + 1);
  const decrease = () => setCount((c) => c + 1);
  const reset = () => setCount(0);
  return (
    <CounterContext.Provider value={{ count, increase, decrease, reset }}>
      <span>{children}</span>
    </CounterContext.Provider>
  );
};

// 3. Create a child component that will implement the common tasks
const Count = () => {
  const { count } = useContext(CounterContext)!;
  return <span>{count}</span>;
};

const Label = ({ children }: Props) => {
  return <span>{children}</span>;
};

const Increase = ({ icon }: TCountProps) => {
  const { increase } = useContext(CounterContext)!;
  return <button onClick={increase}>{icon}</button>;
};

const Decrease = ({ icon }: TCountProps) => {
  const { decrease } = useContext(CounterContext)!;
  return <button onClick={decrease}>{icon}</button>;
};

const Reset = () => {
  const { reset } = useContext(CounterContext)!;
  return <button onClick={reset}>Reset</button>;
};

//4 add child components as properties to parent component
Counter.Count = Count;
Counter.Increase = Increase;
Counter.Label = Label;
Counter.Decrease = Decrease;
Counter.Reset = Reset;
export default Counter;
