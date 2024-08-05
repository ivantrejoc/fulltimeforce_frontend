import "./signInForm.scss";

const SignInForm = () => {
  return (
    <div class="signin">
    <div class="content">
    <div className="logo-wrapper">
      <h2 className="logo">Welcome to My Blog</h2>
      </div>
      <div className="title-wrapper">
      <h2>Sign in</h2>
      </div>
      <form class="form">
        <div class="inputBox">
          <label htmlFor="">Email</label>
          <input type="text" placeholder="Johndoe@mail.com" required /> 
          <p>errors....</p>
        </div>
        <div class="inputBox">
          <label htmlFor="">Password</label>
          <input type="text" placeholder="johndoe21" required /> 
          <p>errors....</p>
        </div>       
        <div class="button-box">
          <button className="button" type="submit">Sign in </button>
          <a className="link" href="/signup">You don't have an account yet? Click here</a>
        </div>
      </form>
    </div>
  </div>
  )
}
export default SignInForm