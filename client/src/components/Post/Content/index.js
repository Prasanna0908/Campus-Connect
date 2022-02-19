import React from 'react';
import styled from 'styled-components/macro';
import PostContentTitle from './Title';
import PostContentPreview from './Preview';
import PostContentFullText from './FullText';
import PostContentDetail from './Detail';
import Poll from 'react-polls';
import { Markup } from 'interweave';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  border-left: 1px solid ${props => props.theme.border};
  padding: 8px;
  min-width: 0;
  min-height: 7em
`;

const renderContent = props => {
  const pollQuestion = 'Is react-polls useful?'
  const pollAnswers = [
    { option: 'Yes', votes: 8 },
    { option: 'No', votes: 2 }
  ]
  switch (props.type) {
    case 'link':
      return <PostContentPreview>{props.url}</PostContentPreview>;

    case 'text':
      if (props.showFullPost) {
        return <PostContentFullText style={{width:"100%", textAlign:"center"}}>{props.text}</PostContentFullText>;
      }
      return <PostContentPreview><Markup content={props.text.replace(/<\/?[^>]+(>|$)/g, "")} /></PostContentPreview>;
    case 'poll':
      if (props.showFullPost) {
        return <PostContentFullText>{props.text}</PostContentFullText>;
      }
console.log(props,"drf")
      return <Poll question={props.title} answers={props.text.split(',').map((val) => (
        {option: val , votes:1}
       ) )} />;

    default:
      break;
  }
};

const PostContent = ({
  url,
  title,
  type,
  text,
  commentCount,
  showFullPost,
  ...details
}) => (
  <Wrapper >
    
    <PostContentTitle
      url={url}
      title={title}
      type={type}
      full={showFullPost}
      {...details}
      
    />
    {renderContent({ type, url, text, showFullPost })}
    
    <PostContentDetail commentCount={commentCount} {...details} />
  </Wrapper>
);

export default PostContent;
