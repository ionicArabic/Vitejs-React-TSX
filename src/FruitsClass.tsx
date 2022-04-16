import React from 'react';

class FruitsClass extends React.Component {
  render() {
    const fruits = ['Apple', 'Banana', 'Orange'];
    return (
      <div>
        <h1>Fruits:</h1>
        <ol>
          {fruits.map((f, index) => (
            <li key={index}>{f}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default FruitsClass;
