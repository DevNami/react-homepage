import React from 'react';

const Post = ({ match }) => {
  return (
    <div>Post {match.params.name}</div>
  )
}

export default Post;