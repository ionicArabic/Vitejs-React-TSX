import React from 'react';
interface ChildClassProps {
  name: String;
  age: Number;
}
class ChildClass extends React.Component<ChildClassProps, { message: String }> {
  constructor(props: ChildClassProps) {
    super(props);
    console.log(this.props);
    this.state = {
      message: 'This is the Child Class',
    };
  }
  componentDidMount() {
    console.log('The Component did mount!');
    //this.setState({ message: this.props.name });
  }
  render() {
    return <h1>{this.state.message}</h1>;
  }
}
interface AppClassProps {
  name: String;
}
interface AppClassState {
  message: String;
}
class AppClass extends React.Component<AppClassProps, AppClassState> {
  constructor(props: AppClassProps) {
    console.log('This is from constructor!');
    super(props);
    this.state = {
      message: 'This is the Parent Class',
    };
    this.updateState = this.updateState.bind(this);
  }
  updateState = () => {
    this.setState({ message: 'The state is changed!' });
  };
  componentDidMount() {
    console.log('The Component did mount!');
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <h3>{this.props.name}</h3>
        <ChildClass name={'Mousa'} age={36} />
        <button onClick={this.updateState}>Click</button>
      </div>
    );
  }
}

export default AppClass;
