import Example_c_1 from "./compound-compound-pattern/example-1/Example_c_1";
import HelloWorldWithLogging from "./higher-order-componet/example-1/HelloWord";
import Example1 from "./render-prop-pattern/example-1/Example1";
import Example2 from "./render-prop-pattern/example-2/Example2";

const App = () => {
  return (
    <>
      {/* Render Prop Pattern */}
      {/* <Example1 />
      <Example2 /> */}

      {/* Higher Order Component Pattern */}
      {/* <HelloWorldWithLogging name="Jason" /> */}

      {/* Compound Component Pattern */}
      <Example_c_1 />
    </>
  );
};

export default App;
