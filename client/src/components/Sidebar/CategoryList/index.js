import React from 'react';
import styled from 'styled-components/macro';
import SidebarCategoryListItem from './Item';
import SidebarCategoryListHeader from './Header';
import categories from '../../../categories';
import {Menu,MenuButton,Button,MenuList,MenuItem,Image} from '@chakra-ui/react'

const CategoryList = styled.nav`
  display: flex;
  flex-direction: column;
`;

const mapCategories = categories =>
  categories.map((category, index) => (
    <SidebarCategoryListItem key={index} category={category} />
  ));

const SidebarCategoryList = () => (
  <CategoryList>
    <SidebarCategoryListHeader />
    {mapCategories(['all', ...categories])}
    {/* <Menu>
  <MenuButton as={Button} //rightIcon={<ChevronDownIcon />}
  >
    Your Cats
  </MenuButton>
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
</Menu> */}
  </CategoryList>
);

export default SidebarCategoryList;
