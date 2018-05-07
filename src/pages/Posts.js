import React from 'react';

import { Link, Route } from 'react-router-dom';
import Post from 'components/Post';

const Posts = ({ match }) => {
  return (
    <div>
      <ul>
        <li><Link to={`${match.url}/1`}>Post 1</Link></li>
        <li><Link to={`${match.url}/2`}>Post 2</Link></li>
        <li><Link to={`${match.url}/3`}>Post 3</Link></li>
        <li><Link to={`${match.url}/4`}>Post 4</Link></li>
      </ul>
      <Route exact path={`${match.url}`} render={() => <div>Posts</div>}/>
      <Route path={`${match.url}/:name`} component={Post} />
    </div>
  )
}

export default Posts;