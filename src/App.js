function App() {
  let value;

  function handleInputChange(event) {
    value = event.target.value;
    console.log(value);
  }
  return (
    <div>
      <input onChange={handleInputChange} />
      {value}
    </div>
  );
}

export default App;
