# Render Props Pattern

The render prop pattern is a technique for sharing code between React components using a prop whose value is a function. This pattern allows you to pass a function to a component that renders whatever you want inside that component. The function, which is the render prop, provides the consumer component with the ability to control what gets rendered inside the component using the render prop.

The key idea is that the component doesn't render its own content directly; instead, it delegates rendering to the function passed as a prop.

#### Benefits

The cool thing about render props, is that render prop pattern is designed to share state and data between components in a flexible and reusable way. By passing a function (the render prop) to a component, the parent component can control what to render and how to use the state and data managed by the child component. This allows you to decouple the state management logic from the UI rendering logic.

## What Problems Does It Solve?

- Code Duplication: Helps eliminate duplicate code by sharing common logic across multiple components.
- Component Logic Reusability: Enables the reuse of complex component logic without tightly coupling it with specific UI components.
- State Management: Simplifies state management by allowing components to share state and behavior.

## When to Use?

- When you need to share logic between multiple components without duplicating code.
- When the UI needs to be dynamically determined by the consuming component.
- When you want to create highly reusable and composable components.

#### Example-01

```javascript
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
```

#### Example-02 (with statefull logic)

```javascript
import { useState } from "react";

type TFormHandler = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
  error: Record<string, string>,
};

type TFormData = {
  name: string,
  email: string,
  password: string,
};

interface Props {
  render: (formObj: TFormHandler) => React.ReactNode;
}

const FormHandler = ({ render }: Props) => {
  const [formData, setFormData] =
    useState <
    TFormData >
    {
      name: "",
      email: "",
      password: "",
    };
  const [error, setError] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name) {
      newErrors.name = "First name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
    } else {
      setError({});
      // Handle form submission
      console.log("Form submitted successfully", formData);
    }
  };

  return render({ handleChange, handleSubmit, error });
};

export default FormHandler;
```

```javascript
import FormHandler from "./FormHandler";

const SignInForm = () => {
  return (
    <div>
      <h1>SignIn Form</h1>

      <FormHandler
        render={({ handleChange, handleSubmit, error }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email2"
                placeholder="Enter your email"
                onChange={handleChange}
              />
              {error.email && <p style={{ color: "red" }}>{error.email}</p>}
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password2"
                placeholder="Enter a password"
                onChange={handleChange}
              />
              {error.password && (
                <p style={{ color: "red" }}>{error.password}</p>
              )}
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      />
    </div>
  );
};

export default SignInForm;
```

```javascript
import FormHandler from "./FormHandler";

const SignupForm = () => {
  return (
    <div>
      <h1>Signup Form</h1>
      <FormHandler
        render={({ handleChange, handleSubmit, error }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">First Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your first name"
                onChange={handleChange}
              />
              {error.name && <p style={{ color: "red" }}>{error.name}</p>}
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                onChange={handleChange}
              />
              {error.email && <p style={{ color: "red" }}>{error.email}</p>}
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter a password"
                onChange={handleChange}
              />
              {error.password && (
                <p style={{ color: "red" }}>{error.password}</p>
              )}
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      />
    </div>
  );
};

export default SignupForm;
```

### Pros:

- Reusability: The render prop pattern enhances reusability by encapsulating logic that can be shared across different components. This is particularly useful for complex operations, such as data fetching, state management, or event handling, that need to be reused in multiple places.
- Flexibility: The render prop pattern provides a high degree of flexibility because it allows the consumer component to dictate exactly what gets rendered. This means that the same logic can be used to render different UI elements based on the context in which it is used.
- Decoupling: By separating the logic from the UI, the render prop pattern makes components more modular and easier to maintain. Logic-heavy components can focus on managing state and behavior, while consumer components focus on rendering the UI.

### Cons:

- Verbosity:The render prop pattern can lead to verbose code because it involves passing functions as props and potentially creating more nested components. This can increase the amount of code needed to accomplish a task.
- Performance: not managed carefully, the render prop pattern can lead to performance issues. Since functions passed as props can cause the component to re-render frequently, it’s important to ensure that these functions are memoized or otherwise optimized.
- Readability: For developers unfamiliar with the render prop pattern, the code can become difficult to read and understand. The indirection introduced by passing functions around can obscure the flow of data and logic.

## Summary

The render prop pattern offers significant benefits in terms of reusability, flexibility, and decoupling, making it a powerful tool for managing shared logic in React applications. However, it also comes with trade-offs, including increased verbosity, potential performance pitfalls, and reduced readability. Understanding these pros and cons helps in deciding when and how to effectively use the render prop pattern in your projects.
