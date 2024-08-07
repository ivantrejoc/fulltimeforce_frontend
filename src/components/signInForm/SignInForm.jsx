import "./signInForm.scss";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../services/authServices";
import { getAuthorization } from "../../redux/actions";

const SignInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const authorization = useSelector((state) => state.isAuth);
  const onSubmit = async (data) => {
    try {
      const response = await signIn(data);
      dispatch(getAuthorization(response));
      console.log("AUTHORIZATION EN FUNC: ", authorization);
      if (response.authenticated && authorization.authenticated) {
        navigate("/");
      } else {
        throw new Error(response.error);
      }
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div className="signin">
      <div className="content">
        <div className="logo-wrapper">
          <h2 className="logo">Welcome to My Blog</h2>
        </div>
        <div className="title-wrapper">
          <h2>Sign in</h2>
        </div>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="signin-inputBox">
            <label htmlFor="email">Email</label>
            <input
              className="signin-input"
              id="email"
              type="text"
              placeholder="Johndoe@mail.com"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required"
                },
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Email not valid"
                }
              })}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div className="signin-inputBox">
            <label htmlFor="password">Password</label>
            <input
              className="signin-input"
              id="password"
              type="password"
              placeholder="Your password..."
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required"
                }
              })}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <div className="button-box">
            <button className="button" type="submit">
              Sign in{" "}
            </button>
            <a className="link" href="/signup">
              You don't have an account yet? Click here
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignInForm;
