import React from 'react';
import 'mainPostData from '../../data/mainPostData'

const MainPost = (mainPostData) => {
return (
        <div className="main-post">
            <img className="main-image" src={mainPostData.image_src} alt="main-post"/>
            <div className="main-post-content">
                <div className="breadcrumbs">
                    <div className="section">{mainPostData.section_name}</div>
                    <div className="date">{mainPostData.date}</div>
                </div>
                <div className="main-title">
                    <h1>{mainPostData.title}</h1>
                </div>  
                <div className="paragraph">
                    <p>{mainPostData.paragraph}</p>
                </div>
                <div className="author">
                    <img src={mainPostData.author_img} alt="author_img" />
                <div className="author-name">{mainPostData.author_name}</div>
                <div className="position">{mainPostData.position}</div>
                </div>
            </div>
        </div>
    );
};
export default MainPost;