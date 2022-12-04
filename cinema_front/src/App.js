import logo from './logo.svg';
import style from './App.module.css'
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./Login/Login";
import Registration from "./Login/Registration";
import Admin from "./Admin/Admin";
import User from "./User/User";

function App() {
  return (
      <BrowserRouter>
        <div>
          <div>
            <Routes>
              <Route path='/login' element={<Login/>}/>
              <Route path='/registration' element={<Registration/>}/>
              <Route path='/admin' element={<Admin/>}/>
              <Route path='/profile' element={<User/>}/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
