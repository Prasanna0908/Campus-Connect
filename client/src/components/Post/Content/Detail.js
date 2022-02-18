import React from 'react';
import styled from 'styled-components/macro';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { link } from '../../shared/helpers';
import Author from '../../shared/Author';
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'

const Wrapper = styled.div`
 
  margin-top: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
 

  & > * {
    margin-right: 4px;
  }

  & > a {
    ${link};
  }

  & > span {
    color: ${props => props.theme.mutedText};
  }
`;


const PostContentDetail = props => (
  <Wrapper >
 
    <Link to={`/Vesit/${props.category}/${props.id}`}>
      {props.commentCount} comment{props.commentCount !== 1 ? 's' : null}
    </Link>
    <Link to={`/Vesit/${props.category}`}>/Vesit/{props.category}</Link>
    <span>by </span>
   
  
    <Author username={props.author && props.author.username} />
    <span>{moment(props.created).fromNow()}</span>
   
  
  </Wrapper>
);

export default PostContentDetail;
