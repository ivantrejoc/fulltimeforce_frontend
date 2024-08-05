import "./signInForm.scss";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../services/authServices";

const SignInForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await signIn(data);
      if (response.autheticated) {
        navigate("/");
        reset();
      } else {
        alert(response.error);
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
          <div className="inputBox">
            <label htmlFor="email">Email</label>
            <input
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
          <div className="inputBox">
            <label htmlFor="password">Password</label>
            <input
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
