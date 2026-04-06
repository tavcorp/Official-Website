import React from "react";
import styles from './styleBlog.module.css';
import { posts } from '../data/blogData';

const Blog = () => {
  return (
    <section className={styles.blogSection}>
      <div className={styles.blogContainer}>
        <header className={styles.blogHeader}>
          <h1>Blog & Insights</h1>
          <p>
            Thoughts, strategies, and insights on branding, technology, and
            digital innovation.
          </p>
        </header>

        <div className={styles.blogGrid}>
          {posts.map((post) => (
            <article key={post.id} className={styles.blogCard}>
              <div className={styles.blogCardContent}>
                <h2>{post.title}</h2>
                <p className={styles.blogDescription}>{post.description}</p>

                {post.content.map((text, index) => (
                  <p key={index} className={styles.blogText}>
                    {text}
                  </p>
                ))}

                <ul className={styles.blogList}>
                  {post.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>

                {/* <button className={styles.blogButton}>Contact Tavcorp</button> */}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Blog;
