import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Router-Crud/Home';
import About from './Router-Crud/About';
import User from './Router-Crud/User';
import AddUser from './Router-Crud/AddUser';
import UpdateUser from './Router-Crud/UpdateUser';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/adduser" element={<AddUser />} />
        <Route path="/user/updateuser/:userId" element={<UpdateUser/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
