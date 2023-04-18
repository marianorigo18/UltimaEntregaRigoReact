import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
