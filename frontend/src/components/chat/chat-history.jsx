import * as React from "react";

import { Message } from './message';
import * as styles from './chat-history.module.scss';

export class ChatHistory extends React.Component {
  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    const messages = this.props.chatHistory.map((msg, index) => <Message key={index} message={msg.data} /> )

    return (
      <div className={styles.messageContainer}>
        <p>
          Welcome to your private chat. Simply share your URL to invite someone into this session.
          If either client disconnects, the session will be closed.
        </p>
        {messages}
        <div style={{ float:"left", clear: "both" }}
             ref={(el) => { this.messagesEnd = el; }}>
        </div>
      </div>
    );
  };
}
