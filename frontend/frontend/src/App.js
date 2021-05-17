import './App.css';
import { Header } from './components/header';
import { GrocerySection } from './components/GrocerySection';


function App() {
  return (
    <div className="App">
      <div className="HeaderClass">
        <Header/>
      </div>
      <div className="GroceryClass">
        <GrocerySection/> 
      </div>
    </div>
  );
}

export default App;
