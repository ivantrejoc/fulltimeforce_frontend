import React, { Component } from "react";
import { createPost } from "../../services/postsServices";
import { connect } from "react-redux";
import "./createPost.scss";
import { redirect } from "react-router-dom";

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      author: this.props.session.user,
      errors: {
        title: "",
        content: ""
      }
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { title, content, author } = this.state;

    let errors = {};
    if (!title) errors.title = "Title is required";
    if (!content) errors.content = "Content is required";
    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      try {
        const postData = {
          title,
          content,
          author
        };
        const response = await createPost(postData);
        if (response.status === 201) {
          alert(response.data.message);
          this.setState({ title: "", content: "",});          
        } else if (response.error) {
          alert(response.error);
        }
      } catch (error) {
        console.error(error);
        alert("Error creating post:", error);
      }
    }
  };

  render() {
    const { title, content, errors } = this.state;    
    return (
      <div className="create-page-layout">
        <div className="create-form-wrapper">
          <div className="create-content">
            <div className="create-title-wrapper">
              <h2>Create Your Post</h2>
            </div>
            <form className="create-form" onSubmit={this.handleSubmit}>
              <div className="create-inputBox">
                <label htmlFor="title">Title</label>
                <input
                  id="title"
                  type="text"
                  name="title"
                  placeholder="Your title..."
                  value={title}
                  onChange={this.handleInputChange}
                />
                {errors.title && <p>{errors.title}</p>}
              </div>
              <div className="create-inputBox">
                <label htmlFor="content">Content</label>
                <textarea
                  id="content"
                  name="content"
                  rows="40"
                  cols="50"
                  placeholder="Lorem ipsum dolor..."
                  value={content}
                  onChange={this.handleInputChange}
                />
                {errors.content && <p>{errors.content}</p>}
              </div>

              <div className="create-button-box">
                <button className="create-button" type="submit">
                  Create Post{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  session: state.isAuth
});
const ConnectedCreatePost = connect(mapStateToProps)(CreatePost);
export default ConnectedCreatePost;
