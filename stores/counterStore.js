import Store from './Store';

class CounterStore extends Store{
  constructor (initialState) {
    super(initialState);
  }

  increment () {
    this.setState(this.state + 1);
  }

  decrement () {
    this.setState(this.state - 1);
  }
}

const counterStore = new CounterStore(0);

export default counterStore;
