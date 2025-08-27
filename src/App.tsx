import React from 'react';

interface State {
  isPressed: boolean;
  pressedKey: string;
}

export class App extends React.Component<{}, State> {
  state: State = {
    isPressed: false,
    pressedKey: '',
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
    this.setState({ isPressed: true });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    const { isPressed, pressedKey } = this.state;

    return (
      <div className="App">
        {isPressed ? (
          <p className="App__message">The last pressed key is [{pressedKey}]</p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
