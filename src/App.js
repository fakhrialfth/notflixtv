
import { Routes, Route } from 'react-router-dom';

import Register from './pages/Register';
import Login from './pages/Login';

import './App.css';
import UserDetail from './pages/UserDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user-detail" element={<UserDetail />} />
      </Routes>
    </div>
  );
}

export default App;
