import React from 'react';
import styled from 'styled-components/macro';
import categories from '../../../categories';
import NavLink from '../../shared/NavLink';
import {Menu,MenuButton,Button,MenuList,MenuItem,Image,Link} from '@chakra-ui/react'
import { NavLink as RouterNavLink } from 'react-router-dom';

const Item = styled(NavLink)`
  padding: 12px;
  font-size: 15px;
  text-decoration: none;
  color: ${props => props.theme.normalText};
  
  ::after {
    left: -1px;
    top: 0;
    bottom: 0;
    border-left: 3px solid ${props => props.theme.accent};
  }
`;

const SidebarCategoryListItem = ({ category }) => {
  const isAll = category === 'all';
  return (
    // <Item exact={isAll} to={isAll ? '/' : `/Vesit/${category}`}>
    //   {category}
    // </Item>

      <Menu mb="5">
      <Link as={RouterNavLink} exact={isAll} to={isAll ? '/' : `/Vesit/${category}`} textDecor='none'>
  <MenuButton w='100%' mb="1" as={Button} exact={isAll} to={isAll ? '/' : `/Vesit/${category}`} //rightIcon={<ChevronDownIcon />}
  >
    {category}
  </MenuButton>
  </Link>

  <MenuList>
    <MenuItem minH='48px'>
      <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://placekitten.com/100/100'
        alt='Fluffybuns the destroyer'
        mr='12px'
      />
      <span>Fluffybuns the Destroyer</span>
    </MenuItem>
    <MenuItem minH='40px'>
      <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://placekitten.com/120/120'
        alt='Simon the pensive'
        mr='12px'
      />
      <span>Simon the pensive</span>
    </MenuItem>
  </MenuList>
</Menu>
  
  );
};

export default SidebarCategoryListItem;
