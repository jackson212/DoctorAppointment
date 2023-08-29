import { DatePicker } from 'antd';
import './App.css';
import { Button, Space } from 'antd';
import Login from  './pages/Login'
import Register from './pages/Register';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';


function App() {
  return (
    <BrowserRouter>
     <Routes>
     
        <Route    path="/login" element={<Login/>} />
        <Route    path="/Register" element={<Register/> } />

     </Routes>
     
   </BrowserRouter>
  );
}

export default App;
