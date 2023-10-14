import React from 'react'; 

const PostComponent = (props) => {
return (
        <div className="main-post">
            <img className="main-image" src={props.image_src} alt="main-post"/>
            <div className="main-post-content">
                <div className="breadcrumbs">
                    <div className="section">{props.section_name}</div>
                    <div className="date">{props.date}</div>
                </div>
                <div className="main-title">
                    <h1>{props.title}</h1>
                </div>  
                <div className="paragraph">
                    <p>{props.paragraph}</p>
                </div>
                <div className="author">
                    <img src={props.author_img} alt="author_img" />
                <div className="author-name">{props.author_name}</div>
                <div className="position">{props.position}</div>
                </div>
            </div>
        </div>
    );
};
export default PostComponent;