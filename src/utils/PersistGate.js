import { PureComponent } from 'react';

export default class extends PureComponent {
  state = { canShow: false };
  componentDidMount() {
    this.props.store.dispatch({ type: "init", show: () => this.setState({ canShow: true }) });
  }
  render() {
    return this.state.canShow ? this.props.children : null;
  }
}