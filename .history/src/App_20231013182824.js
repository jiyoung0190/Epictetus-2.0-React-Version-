import React from 'react'; 
import './styles/style.css';
import Header from './components/Header/Header.js';
import PostSection from './components/Posts/PostSection';

function App() {
  return (
      <div>
        <Header />
        <PostSection />
      </div>
  )
}

export default App;