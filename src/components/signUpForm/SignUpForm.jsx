import "./signUpForm.scss";
import { useForm } from "react-hook-form";
import { createUser } from "../../services/userServices";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
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
      const { email, username, password } = data;
      const userData = {
        email,
        userName: username,
        password
      };
      const response = await createUser(userData);
      if (response.status === 201) {
        alert(response.data.message);
        reset();
        navigate("/signin");
      }
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div className="signup">
      <div className="content">
        <div className="logo-wrapper">
          <h2 className="logo">Welcome to My Blog</h2>
        </div>
        <div className="title-wrapper">
          <h2>Sign up</h2>
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
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              placeholder="johndoe21"
              {...register("username", {
                required: {
                  value: true,
                  message: "Username is required"
                }
              })}
            />
            {errors.username && <p>{errors.username.message}</p>}
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
                },
                pattern: {
                  value:
                    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)[a-zA-Z\d\W]{1,12}$/,
                  message:
                    "Max 12 characters, includes 1 uppercase, 1 lowercase, 1 special character"
                }
              })}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <div className="inputBox">
            <label htmlFor="password">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Repeat your password"
              {...register("confirmPassword", {
                required: {
                  value: true,
                  message: "Confirm password is required"
                },
                validate: (value) =>
                  value === watch("password") || "Passwords do not match"
              })}
            />
            {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
          </div>

          <div className="button-box">
            <button className="button" type="submit">
              Sign up{" "}
            </button>
            <a className="link" href="/signin">
              Do You have an account? Click here
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUpForm;
