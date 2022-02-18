import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';
import store from "../../store"
import 'stream-chat-react/dist/css/index.css';

const App = () => {
  const chatClient = StreamChat.getInstance('87e4fmr6sffp');
const userToken = localStorage.getItem('chatToken');

chatClient.connectUser(
  {
    id: store.getState().auth.user.id,
    name: 'kela',
    image: 'https://getstream.io/random_png/?id=quiet-dream-0&name=abcd',
  },
  userToken,
);

const channel = chatClient.channel('messaging', 'custom_channel_id', {
  // add as many custom fields as you'd like
  image: 'https://www.drupal.org/files/project-images/react.png',
  name: 'Talk about React',
  // members: ['quiet-dream-0'],
});

  return (
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
)};

export default App;