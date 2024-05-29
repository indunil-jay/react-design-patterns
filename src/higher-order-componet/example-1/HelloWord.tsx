import React from "react";

type TUserData = {
  name: string;
};

const HelloWorld = ({ name }: TUserData) => {
  return <h1>Hello, {name}!</h1>;
};

const withLogging = (WrappedComponent: React.ComponentType<TUserData>) => {
  return (props: TUserData) => {
    return (
      <>
        <h1>Login Success</h1>
        <WrappedComponent {...props} />
      </>
    );
  };
};

const HelloWorldWithLogging = withLogging(HelloWorld);

export default HelloWorldWithLogging;
