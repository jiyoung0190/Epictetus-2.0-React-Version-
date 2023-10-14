import React from 'react'; 
import '../styles/style.css';
import Header from './components/Header/Header.js';
import PostSection from './components/Posts/PostSection';

function App() {
  return (
      <div>
        <Header />
        <PostSection></PostSection>
        
        
          
          
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