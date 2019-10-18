import * as React from 'react';

export class About extends React.Component {
  handleNewChat = () => {
    this.props.history.push('/chat');
  }

  render() {
    return (
      <div>
        <h1>About page</h1>
      </div>
    )
  }

}
