import React from 'react'; 
import './styles/style.css';
import Header from './components/Header/Header.js';
import PostList from './components/Posts/PostList';
import MainPost from './components/Posts/MainPost';

function App() {
  return (
      <div>
        <Header />
        <MainPost />
        <PostList />
      </div>
  )
}

export default App;