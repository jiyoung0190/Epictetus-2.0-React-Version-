import React from 'react'; 
import './styles/style.css';
import Header from './components/Header/Header.js';
import PostList from './components/Posts/PostList';

function App() {
  return (
      <div>
        <Header />
        <PostList />
      </div>
  )
}

export default App;