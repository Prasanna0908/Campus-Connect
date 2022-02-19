import { connect } from 'react-redux';
import { fetchPosts, fetchProfile } from '../../actions/posts';
import PostList from './Component';

function compare( a, b ) {
  if ( a.created > b.created ){
    return -1;
  }
  if ( a.created < b.created ){
    return 1;
  }
  return 0;
}

export const mapStateToProps = state => {
  state.posts.items.sort( compare );
  return{
  posts: state.posts.items,
  isFetching: state.posts.isFetching
}};

const mapDispatchToProps = { fetchPosts, fetchProfile };

const PostListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);

export default PostListContainer;
