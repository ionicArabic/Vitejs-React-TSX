const Fruits = () => {
  const fruits = ['Apple', 'Banana', 'Orange'];
  return (
    <div>
      <h1>Fruits:</h1>
      <ul>
        {fruits.map((f, index) => (
          <li key={index}>{f}</li>
        ))}
      </ul>
    </div>
  );
};

export default Fruits;
