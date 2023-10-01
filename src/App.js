import  image from './shop.jpg'
import imageTwo from './man.jpg'
import './App.css';
import { ToDoList } from './ToDoList';

function App() {
  return (
    <div className='app'>
      <div className="container">
        <img src={ image } alt="foto" width="200px"/>
      </div>

      <div className="container">
      <h1>To Do List</h1>
      </div>
      <ToDoList/>
      <div className="container">
      <img src={ imageTwo } alt="foto" width="200px"/>
      </div>
    </div>
  );
}

export default App;
