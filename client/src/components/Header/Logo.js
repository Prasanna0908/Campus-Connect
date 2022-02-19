import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { headerItem } from '../shared/helpers';




const Logo = styled(Link)`
  ${headerItem};
  
  margin-right: auto;
  font-size: 24px;
  font-weight: 500;
  // color: ${props => props.theme.normalText};
  text-decoration: none;
  
  @media (max-width: 425px) {
    padding: 0 8px 0 16px;
    font-size: 19px;
  }
`;

const HeaderLogo = () =>  <Logo  to='/'><img style={{height:"45px", marginRight:"60px", fontSize:"20px"}} src="https://upload.wikimedia.org/wikipedia/en/e/e8/Vesitlog-transparent.png"/>Vesit</Logo>;

export default HeaderLogo;
