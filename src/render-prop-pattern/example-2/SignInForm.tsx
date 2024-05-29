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
