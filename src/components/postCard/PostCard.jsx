import { useDispatch } from "react-redux";
import { getPostById } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import "./postCard.scss";

const PostCard = ({ id, author, content, title, date }) => {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleGetPost = (id) => {
    dispatch(getPostById(id)).then(() => {
      navigation(`/post/${id}`);
    });
  };

  return (
    <div className="pst-card-layout">
      <div className="pst-card-title-wrapper">
        <h3 className="pst-card-title">{title}</h3>
      </div>
      <div className="pst-card-content-wrapper">
        <p className="pst-card-content">{content}</p>
      </div>
      <div className="pst-card-info-wrapper">
        <p className="pst-card-info">
          Posted by: <span className="pst-card-author">{author} </span>{" "}
        </p>
        <p className="pst-card-info">{date}</p>
      </div>
      <div className="pst-button-box">
        <button onClick={() => handleGetPost(id)} className="pst-button">
          Read More
        </button>
      </div>
    </div>
  );
};
export default PostCard;
