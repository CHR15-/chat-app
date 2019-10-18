import React, { Component } from "react";

import * as styles from './message.module.scss';

export class Message extends Component {
  constructor(props) {
    super(props);
    let temp = JSON.parse(this.props.message);
    this.state = {
      message: temp
    };
  }

  render() {
    return <div className={styles.message}>> {this.state.message.body}</div>;
  }
}
