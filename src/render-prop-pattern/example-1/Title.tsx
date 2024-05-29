interface Props {
  render: (textColor: string) => React.ReactNode;
  textColor: string;
}

const Title = ({ render, textColor }: Props) => {
  return render(textColor);
};

const Example1 = () => {
  return (
    <>
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
