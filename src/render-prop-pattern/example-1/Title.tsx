interface Props {
  render: (textColor: string) => React.ReactNode;
  textColor: string;
}

const Title = ({ render, textColor }: Props) => {
  return render(textColor);
};

export default Title;
