import HelloWorldWithLogging from "./higher-order-componet/example-1/HelloWord";
import Example1 from "./render-prop-pattern/example-1/Example1";
import Example2 from "./render-prop-pattern/example-2/Example2";

const App = () => {
  return (
    <>
      <Example1 />
      <Example2 />

      {/* HOC */}
      <HelloWorldWithLogging name="Jason" />
    </>
  );
};

export default App;
