import React from 'react';


const MainPost = (props) => {
return (
        <div className="main-post">
            <img className="main-image" src={this.props.image_src} alt="main-post"/>
            <div className="main-post-content">
                <div className="breadcrumbs">
                    <div className="section"></div>
                    <div className="date"></div>
                </div>
                <div className="main-title">
                    <h1>{this.props.title}</h1>
                </div>  
                <div className="content">
                    <p>{this.props.content}</p>
                </div>
                <div className="author">
                    <img src={this.props.author} alt="authors_picture" />
                <div className="author-name">{this.props.authors_name}</div>
                <div className="position">{this.props.position}</div>
                </div>
            </div>
        </div>
    );
};
export default MainPost;