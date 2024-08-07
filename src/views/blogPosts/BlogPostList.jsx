import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../../components/postCard/PostCard";
import Pagination from "../../components/pagination/Pagination";
import { getPosts } from "../../redux/actions";
import "./blogPost.scss";

const BlogPostList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const allPosts = useSelector((state) => state.posts);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allPosts?.slice(indexOfFirstPost, indexOfLastPost);

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main className="pst-list-page-layout">
      <section className="blog-posts-grid">
        {currentPosts?.map((post) => (
          <div className="post-grid-item" key={post._id}>
            <PostCard
              id={post._id}
              author={post.author}
              content={post.content}
              title={post.title}
              date={post.createdAt}
            />
          </div>
        ))}
      </section>
      <div className="blog-post-pag-wrapper">
        <Pagination
          postsPerPage={postsPerPage}
          allPosts={allPosts.length}
          pagination={pagination}
          currentPage={currentPage}
        />
      </div>
    </main>
  );
};
export default BlogPostList;
