import PostCard from "../../components/postCard/PostCard";
import Pagination from "../../components/pagination/Pagination";
import "./blogPost.scss";

const BlogPostList = () => {
  return (
    <main className="pst-list-page-layout">
      <section className="blog-posts-grid">
        <div className="post-grid-item">
          <PostCard />
        </div>
        <div className="post-grid-item">
          <PostCard />
        </div>
        <div className="post-grid-item">
          <PostCard />
        </div>
        <div className="post-grid-item">
          <PostCard />
        </div>
      </section>
      <div className="blog-post-pag-wrapper">
        <Pagination />
      </div>
    </main>
  );
};
export default BlogPostList;
