import React from 'react'; 
import './styles/style.css';
import Header from './components/Header/Header.js';
import PostsList from './components/Posts/PostList';

function App() {
  return (
      <div>
        <Header />
        <PostSection />
      </div>
  )
}

export default App;