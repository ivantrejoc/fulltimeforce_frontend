import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editPost } from "../../redux/actions";
import "./editPost.scss";

const EditPost = () => {
  const post = useSelector((state) => state.postById);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      id: post._id,
      title: post.title,
      content: post.content,
      author: post.author
    }
  });

  const onSubmit = async (data) => {
    try {
      const response = dispatch(editPost(data));
      console.log("RESPONSE EN COMPONENTE: ", response);
      if (response) {
        alert("Post updated");
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
    <div className="create-page-layout">
      <div className="create-form-wrapper">
        <div className="create-content">
          <div className="create-title-wrapper">
            <h2>Edit Post</h2>
          </div>
          <form className="create-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="create-inputBox">
              <label htmlFor="title">Title</label>
              <input
                id="title"
                type="text"
                placeholder={post.title}
                {...register("title")}
              />
            </div>
            <div className="create-inputBox">
              <label htmlFor="content">Content</label>
              <textarea
                id="content"
                rows="40"
                cols="50"
                placeholder={post.content}
                {...register("content")}
                defaultValue={post.content}
              />
            </div>

            <div className="create-button-box">
              <button className="create-button" type="submit">
                Edit Post{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPost;
