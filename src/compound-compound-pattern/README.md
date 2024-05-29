# Compound Component Pattern

The compound component pattern is a design pattern used in React to create components that work together as a cohesive unit. Instead of exposing a single monolithic API, compound components consist of multiple smaller components that are designed to be used together. These smaller components are tightly coupled, allowing them to share state and behaviors.

## What Problems It Solves ?

- Shared State: Compound components facilitate sharing state and behaviors among multiple components that need to work together.
- Encapsulation: It provides a way to encapsulate related functionality within a single component hierarchy.
- Customization: Users can customize the appearance and behavior of the compound component by composing the smaller components differently.

## When to Use ?

- Reusable Components: Use the compound component pattern when building reusable components with multiple related parts.
- Complex UI Elements: It's suitable for creating complex UI elements, such as tabs, accordions, and sliders, that consist of multiple interactive components.
- Configuration: When you need to allow users to customize the behavior or appearance of a component, the compound component pattern provides a flexible and modular approach

#### example

```javascript
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

```

```javascript
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
```

### Pros:

- Modularity: Components are broken down into smaller, reusable pieces, promoting modularity and maintainability.
- Flexibility: Users can customize the behavior and appearance of the compound component by composing the smaller components in different ways.
- Improved Readability: The compound component pattern enhances code readability by organizing related components together.

### Cons:

- Coupling: Tight coupling between the components can make it challenging to use them independently of each other.
- Complexity: Managing state and interactions between multiple components can lead to increased complexity.
- Learning Curve: Understanding how the compound components work together may require a deeper understanding of the component's API and internal implementation.

## Summary

The compound component pattern is a powerful tool in React for creating reusable, flexible, and maintainable components. By breaking down components into smaller, cohesive units, developers can build complex UI elements that are easy to use and customize. However, it's essential to strike a balance between modularity and complexity and ensure that the components are decoupled enough to be used independently when needed.
