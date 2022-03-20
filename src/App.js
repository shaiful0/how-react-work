import './App.css';
import Device from './component/Device/Device'; 
import Tablet from './component/Tablet/Tablet';
import Watch from './component/Watch/Watch';
function App() {
  return (
    <div className="App">
       <Device name="uphone" price="2000"></Device>
      <Watch></Watch>
      <Tablet></Tablet>
    </div>
  );
}

export default App;
