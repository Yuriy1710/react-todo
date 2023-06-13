import './App.css';
import { useState } from 'react';

const App = () => {

  const [list, setList] = useState([]);
  const [inputItem, setInputItem] = useState('');

  const addItem = (item) => {
    const newItem = {
      id: Math.random(),
      item: item
    }
    setList([...list, newItem]);
    setInputItem('');
  }

  const deleteItem = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };


  return ( 
    <div className="container">
      <h1>Shopping List</h1>
      <input type="text" value={inputItem} onChange={(e) => setInputItem(e.target.value)} />
      <button onClick={() => addItem(inputItem)}>+</button>

      <ol>
        {list.map((item) => (
          <li key={item.id}>
            {item.item}

            <button onClick={() => deleteItem(item.id)}>x</button>
            <button>Done</button>
          </li>
        ))}
      </ol>
    </div>
  );
}
 
export default App;