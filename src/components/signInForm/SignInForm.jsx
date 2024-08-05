import "./signInForm.scss";

const SignInForm = () => {
  return (
    <div className="signin">
    <div className="content">
    <div className="logo-wrapper">
      <h2 className="logo">Welcome to My Blog</h2>
      </div>
      <div className="title-wrapper">
      <h2>Sign in</h2>
      </div>
      <form className="form">
        <div className="inputBox">
          <label htmlFor="">Email</label>
          <input type="text" placeholder="Johndoe@mail.com" required /> 
          <p>errors....</p>
        </div>
        <div className="inputBox">
          <label htmlFor="">Password</label>
          <input type="password" placeholder="Your password" required /> 
          <p>errors....</p>
        </div>       
        <div className="button-box">
          <button className="button" type="submit">Sign in </button>
          <a className="link" href="/signup">You don't have an account yet? Click here</a>
        </div>
      </form>
    </div>
  </div>
  )
}
export default SignInForm