import React from 'react';
import counterStore from '../stores/counterStore';
import actions from '../actions';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      counter: counterStore.getState()
    };
  }
  componentDidMount () {
    this.removeListener = counterStore.addListener((state) => {
      this.setState({counter: state})
    });
    this.setState({counter: counterStore.getState()});
  }
  componentWillUnmount () {
    this.removeListener();
  }

  handleIncrement (ev) {
    ev.preventDefault();
    actions.increment();
  }

  handleDecrement (ev) {
    ev.preventDefault();
    actions.decrement();
  }

  render () {
    return (
      <div className='app'>
        <h1 className='counter'>{ this.state.counter }</h1>
        <div className='actions'>
          <button className='decrement' onClick={this.handleDecrement}>
            -
          </button>
          <button className='increment' onClick={this.handleIncrement}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default App;
