import React from 'react'; 
import './styles/style.css';

/* Components imports */
import Header from './components/Header/Header.js';
import PostList from './components/Posts/PostList';
import MainPost from './components/Posts/MainPost';

/* Data imports */
import mainPostData from '../src/data/mainPostData';

function App() {
  return (
      <div>
        <Header />
        <MainPost mainPostData={mainPostData}/>
        <PostList />
      </div>
  )
}

export default App;