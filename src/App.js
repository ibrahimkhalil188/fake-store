import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Components/Menubar/Menu';
import Product from './Components/Products/Product';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const handleCount = () => {
    setCount(count + 1)
  }
  return (
    <div className="App">
      <Menu count={count}></Menu>
      <Product handleCount={handleCount}></Product>
    </div>
  );
}

export default App;
