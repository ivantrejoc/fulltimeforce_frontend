import "./postCard.scss";

const PostCard = ({ author, content, title, date }) => {
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
        <a href="/post/2" className="pst-button">
          Read More
        </a>
      </div>
    </div>
  );
};
export default PostCard;
