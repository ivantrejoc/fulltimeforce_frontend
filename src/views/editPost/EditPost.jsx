import React, { Component } from "react";
import "./editPost.scss";

export default class EditPost extends Component {
  render() {
    return (
      <div className="create-page-layout">
      <div className="create-form-wrapper">
        <div className="create-content">
          <div className="create-title-wrapper">
            <h2>Edit Post</h2>
          </div>
          <form className="create-form">
            <div className="create-inputBox">
              <label htmlFor="title">Title</label>
              <input id="title" type="text" placeholder="Your title..." />
              <p>errors...</p>
            </div>
            <div className="create-inputBox">
              <label htmlFor="content">Content</label>
              <textarea id="content" rows="40" cols="50" placeholder="Lorem ipsum dolor..." />
              <p>errors...</p>
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
  }
}
