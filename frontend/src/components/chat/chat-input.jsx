import React, { Component } from "react";

import * as styles from './chat-input.module.scss';

export class ChatInput extends Component {
  render() {
    return (
      <div className={styles.chatInput}>
        <input
          onKeyDown={this.props.send}
          placeholder="Send a message... "
        />
      </div>
    );
  }
}
