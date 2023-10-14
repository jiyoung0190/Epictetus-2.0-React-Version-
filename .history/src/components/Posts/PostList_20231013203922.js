import PostComponent from '../Posts/PostComponent';

function PostsList(props) {
  return (
    <div className="posts-list">
      {postsData.map(post => (
        <PostComponent key={post.id} imageUrl={post.imageUrl} author={post.author} />
      ))}
    </div>
  );
}

export default PostsList;
 