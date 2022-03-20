import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Components/Menubar/Menu';

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <h1>Hello world
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
      </h1>
    </div>
  );
}

export default App;
