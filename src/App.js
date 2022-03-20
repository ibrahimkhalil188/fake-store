import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Components/Menubar/Menu';
import Product from './Components/Products/Product';

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Product></Product>
    </div>
  );
}

export default App;
