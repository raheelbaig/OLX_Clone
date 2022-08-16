import './App.css';
import { useState } from 'react';
import Signup from './Components/Signup';

import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import CreateAdd from './Components/CreateAdd';
import ProductCard from './Components/ProductCard';
import Profile from './Components/Profile'
import store from './Store';
import { Provider } from 'react-redux';
import Myads from './Components/Myads';


function App() {
  const [changeScreenCreateAdd, setChangeScreenCreateAdd] = useState("dashboard")
  return (
    <Provider store={store}>
      <div className="App">
        {changeScreenCreateAdd === "signup" && <Signup setChangeScreenCreateAdd={setChangeScreenCreateAdd} />}
        {changeScreenCreateAdd === "login" && <Login setChangeScreenCreateAdd={setChangeScreenCreateAdd} />}
        {changeScreenCreateAdd === "dashboard" && <Dashboard setChangeScreenCreateAdd={setChangeScreenCreateAdd} />}
        {changeScreenCreateAdd === "createadd" && <CreateAdd setChangeScreenCreateAdd={setChangeScreenCreateAdd} />}
        {changeScreenCreateAdd === "profile" && <Profile setChangeScreenCreateAdd={setChangeScreenCreateAdd} />}
        {changeScreenCreateAdd === "myads" && <Myads setChangeScreenCreateAdd={setChangeScreenCreateAdd} />}
        {/* <ProductCard />  */}
        {/* <Dashboard /> */}
        {/* <Profile /> */}
      </div>
    </Provider>
  );
}

export default App;
