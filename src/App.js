import logo from './logo.svg';
import './App.css';
import Viewtu from './components/Viewtu';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Add from './components/Add';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route path='/' element={<Viewtu/>}/>
      <Route path='/add' element={<Add
      data={{id:'',name:'',grade:''}}
      method="post"/>}/>
     </Routes>
    </div>
  );
}

export default App;
