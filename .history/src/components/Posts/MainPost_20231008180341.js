import React from 'react';


const MainPost = (props) => {
return (
        <div className="main-post">
            <img className="main-image" src={this.props.image_src} alt="main-post"/>
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
        </div>
    </div>
    );
};
export default MainPost;