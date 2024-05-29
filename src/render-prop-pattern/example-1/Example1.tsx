import Title from "./Title";

const Example1 = () => {
  return (
    <>
      <p>Example-1</p>
      <Title
        textColor="red"
        render={(textColor) => (
          <h1 style={{ color: textColor }}>Main Header</h1>
        )}
      />
      <Title
        textColor="green"
        render={(textColor) => (
          <p style={{ color: textColor }}>some sample text</p>
        )}
      />
    </>
  );
};
export default Example1;
