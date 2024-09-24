import React, { useState, useEffect } from 'react';
import './App.css';

import Circular from './components/Circular';

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean | null>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return loading ? (
    <Circular 
      size={50} 
      color="black" 
      strokeWidth={8} />
  ) : (
    <>
  <header>
        <span className="menu-icon" 
        // onclick="toggleMenu()"
        >&#9776;
        </span>
        <nav className="nav-links">
            <a href="#">Home</a>
            <a href="#">Posts</a>
            <a href="#">About</a>
        </nav>
    </header>

    <div className="container">
        <section className="latest-post">
            <h2>Latest Post</h2>
            <article>
                <h3>Title of the Latest Post</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non nibh eget mi sodales fermentum at et sem.</p>
            </article>
        </section>

        <section className="popular-posts">
            <h2>Popular Posts</h2>
            <article>
                <h3>Popular Post 1</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non nibh eget mi sodales fermentum at et sem.</p>
            </article>
            <article>
                <h3>Popular Post 2</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non nibh eget mi sodales fermentum at et sem.</p>
            </article>
        </section>

        <section className="blog-list">
            <h2>All Blog Posts</h2>
            <div className="blog-post">
                <h3>Blog Post Title 1</h3>
                <p>Short description or summary of the blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </div>
            <div className="blog-post">
                <h3>Blog Post Title 2</h3>
                <p>Short description or summary of the blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </div>
            <div className="blog-post">
                <h3>Blog Post Title 3</h3>
                <p>Short description or summary of the blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </div>
        </section>
    </div>

    <footer>
        <p>&copy; 2024 Your Blog Name. All rights reserved.</p>
    </footer>

    {/* <script>
        // Toggle the mobile menu on click
        function toggleMenu() {
            const nav = document.querySelector('.nav-links.mobile');
            nav.classList.toggle('open');
        }
    </script> */}
    </>
  );
};

export default App;
