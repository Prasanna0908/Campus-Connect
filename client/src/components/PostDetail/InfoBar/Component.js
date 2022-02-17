import React from 'react';
import styled from 'styled-components/macro';
import DeleteButton from '../../shared/DeleteButton';
import { FacebookShareButton, TwitterShareButton,WhatsappShareButton ,EmailShareButton,  LinkedinShareButton} from "react-share";
import { FacebookIcon, TwitterIcon,WhatsappIcon,EmailIcon,  LinkedinIcon } from "react-share";

const Wrapper = styled.div`
  display: flex;
  margin-top: -1px;
  border: 1px solid ${props => props.theme.border};
  ${props => props.round && 'border-radius: 0 0 2px 2px'};
  padding: 8px;
  background-color: ${props => props.theme.foreground};
  font-size: 13px;
  color: ${props => props.theme.mutedText};
  @media (max-width: 768px) {
    border-left: none;
    border-right: none;
  }
`;

class PostDetailInfoBar extends React.Component {
  deletePost = () => this.props.attemptDeletePost();

  render() {
    return (
      <Wrapper round={!this.props.token}>
        <span>{this.props.views} views</span>
        <span>&nbsp;|&nbsp;</span>
        <span>{this.props.upvotePercentage}% upvoted</span>
        {this.props.token &&
          (this.props.user.id === this.props.author.id ||
            this.props.user.admin) && (
            <DeleteButton onClick={this.deletePost} />
          )}
          {
            <span>
            <FacebookShareButton
            title="Facebook"
             url={ window.location.href}
            quote={"Share the post"}
            hashtag={"#hashtag"}
            description={"aiueo"}
            // className="Demo__some-network__share-button"
          >
            <FacebookIcon size={32} round /> 
          </FacebookShareButton>
          <WhatsappShareButton  url={ window.location.href} title="Whatsapp">
          <WhatsappIcon  size={32} round /> 
            </WhatsappShareButton>
          
            <EmailShareButton url={ window.location.href} title="Email">
          <EmailIcon  size={32} round /> 
            </EmailShareButton>

            <LinkedinShareButton source={ "sdsd"} summary="sdsds" title="Email" url={window.location.href}>
          <LinkedinIcon  size={32} round /> 
            </LinkedinShareButton>

          
          </span>
          }
      </Wrapper>
    );
  }
}

export default PostDetailInfoBar;