import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';

import 'stream-chat-react/dist/css/index.css';

const chatClient = StreamChat.getInstance('pwjajzfrgn2d');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiYWdlZC1zdW5zZXQtMCJ9.3VAS2rf-du0C3EqiKOLEECv8LkbJcziJlG7dKHSYGxQ';

chatClient.connectUser( 
    { 
        id: 'rough-truth-2', 
        name: 'John Doe', 
        image: 'https://getstream.io/random_svg/?name=John', 
    }, 
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoicm91Z2gtdHJ1dGgtMiJ9.6ccd_hcx2m79OtJ1b_QethjQ9QhoIo69-gu-nJ8Hifo', 
);


const channel = chatClient.channel('messaging', 'custom_channel_id', {
  // add as many custom fields as you'd like
  image: 'https://www.drupal.org/files/project-images/react.png',
  name: 'Talk about Redsdsdsact',
  members: ['aged-sunset-0','bgbyy'],
});

const ChatAuthor = () => (
  <Chat client={chatClient} theme='messaging light'>
    <Channel channel={channel}>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
);

export default ChatAuthor;
