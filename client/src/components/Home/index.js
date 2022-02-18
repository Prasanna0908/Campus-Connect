import React from 'react';
import styled from 'styled-components/macro';
import { Route } from 'react-router-dom';
import HomeMainSection from './MainSection';
import CategoryMenuContainer from '../CategoryMenu/Container';
import PostListContainer from '../PostList/Container';
import PostListContainerVotes from '../PostList/ContainerVotes';
import PostDetailContainer from '../PostDetail/Container';
import SidebarContainer from '../Sidebar/Container';
// import { useSelector } from 'react-redux'
import {
  useDisclosure,
  Input,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Avatar,
  Flex,
  Heading,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton
} from '@chakra-ui/react';
import ChatAuthor from '../ChatAuthor/Component';
import store from '../../store';

// {this.props.token &&
//   (this.props.user.id === this.props.author.id ||
//     this.props.user.admin) && (
//     <DeleteButton onClick={this.deleteComment} />
//   )}

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 0 5vw;

  @media (max-width: 1024px) {
    margin: 0 5vw;
  }

  @media (max-width: 768px) {
    display: block;
    margin: 0;
  }
`;

const Home = props => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  //

  console.log(props.token);
  return (
    <Wrapper>
      <HomeMainSection>
        <Route component={CategoryMenuContainer} />
        <Route exact path='/' component={PostListContainer} />
        <Route
          exact
          path='/Vesit/:category'
          render={({ match }) => {
            return <PostListContainer category={match.params.category} />;
          }}
        />
        <Route
          exact
          path='/u/:username'
          render={({ match }) => (
            <div>
              <Flex alignItems='center' justifyContent='center'>
                <Avatar name={match.params.username} mr='5' />
                {match.params.username}
              </Flex>
              <Flex flexDir='row' justifyContent='space-around'>
                <Heading as='h4' size='md'>
                  Here are all my Posts
                </Heading>
                <Button ref={btnRef} onClick={onOpen}>
                  Let's talk
                </Button>
                <Drawer
                  isOpen={isOpen}
                  placement='right'
                  size='xl'
                  onClose={onClose}
                  finalFocusRef={btnRef}
                >
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Create your account</DrawerHeader>

                    <DrawerBody>
                      <ChatAuthor />
                    </DrawerBody>
                  </DrawerContent>
                </Drawer>
              </Flex>
              <PostListContainer username={match.params.username} />
            </div>
          )}
        />
        <Route
          exact
          path='/Vesit/:category/:post'
          render={({ match, history }) => (
            <PostDetailContainer id={match.params.post} history={history} />
          )}
        />
      </HomeMainSection>
      <Route component={SidebarContainer} />
    </Wrapper>
  );
};

export default Home;
