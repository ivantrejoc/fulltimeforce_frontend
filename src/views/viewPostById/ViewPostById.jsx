import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPostById, deletePost } from "../../redux/actions";
import "./viewPostById.scss";

const ViewPostById = () => {
  const post = useSelector((state) => state.postById);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleGetPost = (id) => {
    dispatch(getPostById(id)).then(() => {
      navigation(`/edit/${id}`);
    });
  };

  const handleDeletePost = (id) => {
    dispatch(deletePost(id)).then(() => {
      navigation("/");
    });
  };

  const rawDate = new Date(post.updatedAt);
  const formattedDate = rawDate.toLocaleString("en-US", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit"
  });

  return (
    <main className="viewpst-page-layout">
      <div className="viewpst-card-layout">
        <div className="viewpst-card-title-wrapper">
          <h3 className="viewpst-card-title">{post.title}</h3>
        </div>
        <div className="viewpst-card-content-wrapper">
          <p className="viewpst-card-content">{post.content}</p>
        </div>
        <div className="viewpst-card-info-wrapper">
          <p className="viewpst-card-info">
            Author: {post.author} <span className="viewpst-card-author"></span>{" "}
          </p>
          <p className="viewpst-card-info">{formattedDate}</p>
        </div>
        <div className="viewpst-button-box">
          <button
            onClick={() => handleGetPost(post._id)}
            className="viewpst-button"
          >
            Edit Post
          </button>
          <button
            className="viewpst-button"
            onClick={() => handleDeletePost(post._id)}
          >
            Delete Post
          </button>
        </div>
      </div>
    </main>
  );
};
export default ViewPostById;
