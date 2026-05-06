import React, { useState, useEffect } from "react";
import styles from './styleBlog.module.css';
import { posts } from '../data/blogData';
import { useParams } from 'react-router-dom';

const Blog = () => {
  const [expandedPost, setExpandedPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setExpandedPost(parseInt(id));
    }
  }, [id]);

  const toggleExpand = (postId) => {
    setExpandedPost(expandedPost === postId ? null : postId);
  };

  return (
    <section className={styles.blogSection}>
      <div className={styles.blogContainer}>
        <header className={styles.blogHeader} data-aos="fade-up">
          <h1 style={{ color: "#DF9931" }} data-aos="zoom-in" data-aos-delay="100" data-aos-duration="700">Blog & Insights</h1>
          <p data-aos="fade-up" data-aos-delay="150" data-aos-duration="700">
            Thoughts, strategies, and insights on branding, technology, and
            digital innovation.
          </p>
        </header>

        <div className={styles.blogGrid}>
          {posts.map((post, index) => (
            <article 
              key={post.id} 
              className={styles.blogCard}
              data-aos="fade-up"
              data-aos-delay={`${100 + (index * 50)}`}
              data-aos-duration="700"
            >
              <div className={styles.blogCardContent}>
                <h2 style={{ color: "#DF9931" }}>{post.title}</h2>
                
                {/* Show only first paragraph initially */}
                <p className={styles.blogText}>
                  {post.content[0]}
                </p>

                {/* Show remaining content only when expanded */}
                {expandedPost === post.id && (
                  <>
                    {post.content.slice(1).map((text, index) => (
                      <p key={index} className={styles.blogText}>
                        {text}
                      </p>
                    ))}

                    <ul className={styles.blogList}>
                      {post.points.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </>
                )}

                {/* Read More / Read Less button */}
                <button 
                  onClick={() => toggleExpand(post.id)}
                  className={styles.blogButton}
                  style={{ 
                    color: "#DF9931", 
                    background: "none", 
                    border: "none", 
                    cursor: "pointer",
                    marginTop: "1rem",
                    fontSize: "1rem",
                    fontWeight: "600",
                    textDecoration: "underline"
                  }}
                >
                  {expandedPost === post.id ? "Read Less ▲" : "Read More →"}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Blog;
