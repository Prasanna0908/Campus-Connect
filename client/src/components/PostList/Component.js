import React from 'react';
import styled from 'styled-components/macro';
import PostListItem from './Item';
import LoadingIndicatorBox from '../shared/LoadingIndicator/Box';
import Empty from '../shared/Empty';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import SearchBox from "./SearchBox"

const List = styled.ul`
  list-style: none;
  border:0;
  border-radius: 2px;
 

  @media (max-width: 768px) {
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 0;
  }
`;

function compare( a, b ) {
  if ( a.score > b.score ){
    return -1;
  }
  if ( a.score < b.score ){
    return 1;
  }
  return 0;
}

class PostList extends React.Component {
  loadPosts = () => {
    const { username, category } = this.props;
    if (username) return this.props.fetchProfile(username);
    return this.props.fetchPosts(category);
  };

  componentDidMount() {
    this.loadPosts();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      this.props.category !== prevProps.category ||
      this.props.username !== prevProps.username
    )
      this.loadPosts();
  }

  mapPosts = () =>
    this.props.posts.map((post, index) => (
      <PostListItem key={index} {...post} />
    ));

    mapPostsSort = () =>
      
      this.props.posts.sort(compare).map((post, index) => (
        <PostListItem key={index} {...post} />
      ));
    
   

  render() {
    if (this.props.isFetching) return <LoadingIndicatorBox />;
    if (!this.props.posts || this.props.posts.length === 0) return <Empty />;
    return (
      <Tabs>
        <TabList>
          <Tab>By Date</Tab>
          <Tab>By Votes</Tab>
          <SearchBox props={this.props.posts} placeholder="Search by Title" />
         
        </TabList>

        <TabPanels>
          <TabPanel>
          <List>{this.mapPosts()}</List>;
          </TabPanel>
          <TabPanel>
           <List>{this.mapPostsSort()}</List>
          </TabPanel>
          
        </TabPanels>
      </Tabs>
    );

    //
  }
}

export default PostList;
