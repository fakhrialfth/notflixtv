
import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    const data = {
      email,
      password
    };
    try {
      const response = await axios({
        method: 'POST',
        url: 'https://notflixtv.herokuapp.com/api/v1/users/login',
        data: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      dispatch({ type: 'user/save-token', payload: response.data.data.token });
      navigate('/user-detail');
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label style={{ display: 'block' }}>
        </label>
        <label style={{ display: 'block' }}>
          email
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
        </label>
        <label style={{ display: 'block' }}>
          password
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
        </label>

        <button type="submit" value="Submit">login</button>
      </form>
      <Link to="/register">Register</Link>
    </div>
  );
}