import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { overflow, link } from '../../shared/helpers';
import { Heading, Flex , Badge} from '@chakra-ui/react'
import { AiOutlineEye } from "react-icons/ai";

const Wrapper = styled.div`
  display: flex;

  * {
    ${overflow};

    display: block;
    font-size: 15px;
    line-height: 21px;
    font-weight: 500;
    text-decoration: none;
    color: ${props => props.theme.normalText};
    ${props => props.full && 'white-space: unset'};
  }

  a {
    ${link({ underline: true })};
  }
`;

const renderTitle = props => {
  switch (props.type) {
    case 'link':
      return <a href={props.url}>{props.title}</a>;

    case 'text':
      if (props.full) return <div ><Heading as='h5' size='xl'>{props.title}</Heading></div>;
      return <Link to={`/Vesit/${props.category}/${props.id}`}><Heading as='h5'fontWeight="bold" size='md'>{props.title}</Heading></Link>;
    
    case 'poll':
      if (props.full) return <span>{props.title}</span>;
      return <Link to={`/Vesit/${props.category}/${props.id}`}>{props.title}</Link>;

    default:
      break;
  }
};

const PostContentTitle = props => (
  <div>
    {console.log(props)}
    <div>
      <Flex alignItems='center' style={{fontWeight: "100"}}><AiOutlineEye style={{fill: "#999"}}/> &nbsp;  {props.views} views &nbsp;    &nbsp; 
      <Badge colorScheme='green'>{props.category}</Badge> </Flex>
    
    </div>

  <Wrapper  full={props.full}>{renderTitle(props)}</Wrapper>
  </div>
);

export default PostContentTitle;
