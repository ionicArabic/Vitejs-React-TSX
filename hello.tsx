import React from 'react';

class Message extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'This is Class Component!',
    };
  }

  render() {
    return <h2>{this.state.message}</h2>;
  }
}

const Hi = ({ name, age }: any) => {
  return (
    <div>
      <h1>
        Hi, {name}: {age}
      </h1>
    </div>
  );
};

const Hello = () => {
  let name = 'Mousa';
  const age = 36;
  const showNameAge = () => {
    name = 'alakesh';
  };

  return (
    <div>
      <h1>Hello, world!</h1>
      <Hi name={name} age={age} />
      <Message />
      <button onClick={showNameAge}>Click</button>
    </div>
  );
};

export default Hello;
