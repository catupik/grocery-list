import image from './shop1.jpg'
import image2 from './shop2.jpg'
import './App.css';
import { GroceryList } from './GroceryList';

function App() {
  return (
    <div className="app">
      <div className="container">
      <img src={image} alt='shop1' width='200px'/> 
      </div>
      <div className="container">
      <h1>Grocery List</h1>
      </div>
      <GroceryList/>
      
      <div className="container">
      <img src={image2} alt='shop2' width='200px'/> 
      </div>
    

    </div>
  );
}

export default App;
