import React, { useEffect, useState } from "react";
import BlogPost from "./blogs-post";
import "./Blogs.css";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4); // set post per page number

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  // pagination
  const indexOfLastPost = currentPage * postsPerPage; // Index of the last blog on the current
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section>
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>

      <div className="blog-posts">
        <ul className="blog-posts-list">
          {currentPosts.map((post, index) => (
            <BlogPost
              key={index}
              title={post.title}
              category={post.category}
              date={post.date}
              image={post.image}
              description={post.description}
            />
          ))}
        </ul>
      </div>

      {/* pagination */}
      <nav>
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              onClick={() => paginate(currentPage - 1)}
              className="page-link"
              disabled={currentPage === 1}
            >
              Previous
            </button>
          </li>
          {Array.from(
            { length: Math.ceil(blogs.length / postsPerPage) },
            (_, index) => (
              <li
                key={index}
                className={`page-item ${
                  currentPage === index + 1 ? "active" : ""
                }`}
              >
                <button
                  onClick={() => paginate(index + 1)}
                  className="page-link"
                >
                  {index + 1}
                </button>
              </li>
            )
          )}
          <li
            className={`page-item ${
              currentPage === Math.ceil(blogs.length / postsPerPage)
                ? "disabled"
                : ""
            }`}
          >
            <button
              onClick={() => paginate(currentPage + 1)}
              className="page-link"
              disabled={currentPage === Math.ceil(blogs.length / postsPerPage)}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Blog;
