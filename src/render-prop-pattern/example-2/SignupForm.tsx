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
