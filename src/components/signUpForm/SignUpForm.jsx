import "./signUpForm.scss";

const SignUpForm = () => {
  return (
    <div class="signup">
      <div class="content">
      <div className="logo-wrapper">
        <h2 className="logo">Welcome to My Blog</h2>
        </div>
        <div className="title-wrapper">
        <h2>Sign up</h2>
        </div>
        <form class="form">
          <div class="inputBox">
            <label htmlFor="">Email</label>
            <input type="text" placeholder="Johndoe@mail.com" required /> 
            <p>errors....</p>
          </div>
          <div class="inputBox">
            <label htmlFor="">Username</label>
            <input type="text" placeholder="johndoe21" required /> 
            <p>errors....</p>
          </div>
          <div class="inputBox">
            <label htmlFor="">Password</label>
            <input type="password" placeholder="Your password..." required /> 
            <p>errors....</p>
          </div>
          <div class="inputBox">
            <label htmlFor="">Confirm Password</label>
            <input type="password" placeholder="Repeat your password" required />
            <p>errors....</p> 
          </div>
          
          <div class="button-box">
            <button className="button" type="submit">Sign up </button>
            <a className="link" href="/signin">Do You have an account? Click here</a>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUpForm;
