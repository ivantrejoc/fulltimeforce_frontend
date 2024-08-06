import "./postCard.scss";

const PostCard = () => {
  return (
    <div className="pst-card-layout">
      <div className="pst-card-title-wrapper">
        <h3 className="pst-card-title">Post Title</h3>
      </div>
      <div className="pst-card-content-wrapper">
        <p className="pst-card-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit
          amet nunc ac metus iaculis egestas. Pellentesque turpis nisi,
          dignissim eu rhoncus et, euismod in felis.
        </p>
      </div>
      <div className="pst-card-info-wrapper">
        <p className="pst-card-info">
          Posted by: <span className="pst-card-author">John Doe </span>{" "}
        </p>
        <p className="pst-card-info">07/29/2024</p>
      </div>
      <div className="pst-button-box">
            <button className="pst-button" type="submit">
              Read More{" "}
            </button>            
          </div>
    </div>
  );
};
export default PostCard;
