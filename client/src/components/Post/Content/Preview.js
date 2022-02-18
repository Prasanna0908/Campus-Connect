import styled from 'styled-components/macro';
import { overflow } from '../../shared/helpers';

const PostContentPreview = styled.div`
  ${overflow};

  padding-bottom: 1px;
  font-size: 13px;
  line-height: 19px;
  color: ${props => props.theme.mutedText};
`;

export default PostContentPreview;
