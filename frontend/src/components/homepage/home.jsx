import * as React from 'react';

import * as styles from './home.module.scss';

export class Homepage extends React.Component {
  handleNewChat = () => {
    this.props.history.push('/chat');
  }

  render() {
    return (
      <div className={styles.sectionWrapper}>
        <div className={"section"}>
          <div className={"columns is-centered"}>
            <div className={"column is-four-fifths"}>
              <p className={styles.header}>A SAFE PLACE TO CHAT.</p>
              <p className={styles.desc}>No storage. No logs. No identity. No timestamps.</p>
              <div className={styles.actionWrapper}>
                <button className={"button"}
                  onClick={this.handleNewChat}
                >
                  Just chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}
