
import './App.css';
import {useState} from 'react';

function App() {
 
  let [name, setName] = useState('Etiosa')
  const handleClick = () => {
    setName('Jerry')
  } 
  return (
    <div className="App">
      <p>My name is {name}</p>
      <button onClick = {handleClick}>Click me</button>
    </div>
  );
}

export default App;
