import React from 'react';
import mainPostData from '../../data/mainPostData'

const MainPost = (mainPostData) => {
return (
        <div className="main-post">
            <img className="main-image" src={this.mainPostData.image_src} alt="main-post"/>
            <div className="main-post-content">
                <div className="breadcrumbs">
                    <div className="section">{this.mainPostData.section_name}</div>
                    <div className="date">{this.mainPostData.date}</div>
                </div>
                <div className="main-title">
                    <h1>{this.mainPostData.title}</h1>
                </div>  
                <div className="paragraph">
                    <p>{this.mainPostData.paragraph}</p>
                </div>
                <div className="author">
                    <img src={this.mainPostData.author_img} alt="author_img" />
                <div className="author-name">{this.mainPostData.author_name}</div>
                <div className="position">{this.mainPostData.position}</div>
                </div>
            </div>
        </div>
    );
};
export default MainPost;