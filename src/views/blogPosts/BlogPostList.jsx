import PostCard from "../../components/postCard/PostCard";
import "./blogPost.scss";

const BlogPostList = () => {
  return (
    <main className="page-layout">
      <section className="blog-posts-grid">
        <div className="post-card-container">
          <PostCard />
        </div>
        <div className="post-card-container">
          <PostCard />
        </div>
        <div className="post-card-container">
          <PostCard />
        </div>
        <div className="post-card-container">
          <PostCard />
        </div>
      </section>
    </main>
  );
};
export default BlogPostList;
