import * as React from 'react';

import { ChatHistory } from './chat-history';
import { ChatInput } from './chat-input';
import { connect, sendMsg } from '../../services/chat/chat-manager';

import * as styles from './chat.module.scss';

export class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chatHistory: []
    }
  }

  componentDidMount() {
    connect((msg) => {
      this.setState(prevState => ({
        chatHistory: [...this.state.chatHistory, msg]
      }));
      
    });
  }

  send(event) {
    if(event.keyCode === 13) {
      sendMsg(event.target.value);
      event.target.value = "";
    }
  }

  render() {
    return (
      <div className={styles.chatWindow}>
        <ChatHistory chatHistory={this.state.chatHistory} />
        <ChatInput send={this.send} />
      </div>
    );
  }

}
