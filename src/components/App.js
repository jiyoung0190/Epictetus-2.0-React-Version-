import React from 'react'; 
import '../styles/style.css';
import Navigation from './Navigation';
import SearchBar from './SearchBar';
import Logo from './Logo';

function App() {
  return (
      <div>
        <nav>
          <Logo />
          <Navigation />
          <SearchBar />
        </nav>
      <div className="posts">
        <div className="head-post-wrapper">
          <div className="main-image">
            <img src="images/homemain.png" alt="homemain_img" />
          </div>
        </div>
        <div className="head-post-content">
          <div className="breadcrumbs">
            <div className="section"></div>
            <div className="date"></div>
          </div>
          
          <div className="main-title">
            <h1>Understanding color theory: the color wheel and finding complementary colors</h1>
          </div>
          <div className="paragraph">
            <p>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. </p>
          </div>
          <div className="author">
            <img src="./images/author1.png" alt="author_picture" />
            <div className="author-name">Leslie Alexander</div>
            <div className="position">UI Designer</div>
          </div>
          <div className="posts-wrapper">
            <div className="post1">
              <div className="image"></div>
              <div className="content"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;