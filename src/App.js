import './App.css';
import Shop from './component/Shop/Shop';


function App() {
  return (
    <div className="App">
      <nav className='title'>
        <h1>Women's World</h1>
      </nav>

      {/* container for both products and carts */}
      <Shop></Shop>
    </div>
  );
}

export default App;
