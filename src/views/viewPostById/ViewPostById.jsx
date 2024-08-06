import { useDispatch, useSelector } from "react-redux";
import "./viewPostById.scss";

const ViewPostById = () => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.postById);
  


  return (
    <main className="viewpst-page-layout">
      <div className="viewpst-card-layout">
      <div className="viewpst-card-title-wrapper">
        <h3 className="viewpst-card-title">{post.title}</h3>
      </div>
      <div className="viewpst-card-content-wrapper">
        <p className="viewpst-card-content">
        {post.content}
        </p>
      </div>
      <div className="viewpst-card-info-wrapper">
        <p className="viewpst-card-info">
          Author: {post.author} <span className="viewpst-card-author"></span>{" "}
        </p>
        <p className="viewpst-card-info">{post.updatedAt}</p>
      </div>
      <div className="viewpst-button-box">
        <button className="viewpst-button">
          Edit Post
        </button>
        <button className="viewpst-button">
          Delete Post
        </button>
      </div>
    </div>
    </main>
  );
};
export default ViewPostById;
