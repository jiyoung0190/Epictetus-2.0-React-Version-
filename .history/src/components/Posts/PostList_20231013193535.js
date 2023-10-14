import postsData from '../data/postData';
import PostComponent from '../components/PostComponent';

function PostsList() {
  return (
    <div className="posts-list">
      {postsData.map(post => (
        <PostComponent key={post.id} imageUrl={post.imageUrl} author={post.author} />
      ))}
    </div>
  );
}

export default PostsList;
 