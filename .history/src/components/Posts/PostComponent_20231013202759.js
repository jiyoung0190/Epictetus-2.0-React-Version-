import mainPostData as props from '../../data/mainPostData';


const PostComponent = (props) => {
return (
        <div className="main-post">
            <img className="main-image" src={this.props.image_src} alt="main-post"/>
            <div className="main-post-content">
                <div className="breadcrumbs">
                    <div className="section">{this.props.section_name}</div>
                    <div className="date">{this.props.date}</div>
                </div>
                <div className="main-title">
                    <h1>{this.props.title}</h1>
                </div>  
                <div className="paragraph">
                    <p>{this.props.paragraph}</p>
                </div>
                <div className="author">
                    <img src={this.props.author_img} alt="author_img" />
                <div className="author-name">{this.props.author_name}</div>
                <div className="position">{this.props.position}</div>
                </div>
            </div>
        </div>
    );
};
export default PostComponent;