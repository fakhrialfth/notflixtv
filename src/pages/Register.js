
import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [ firstname, setFirstname ] = useState('');
  const [ lastname, setLastname ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ passwordConfirmation, setPasswordConfirmation ] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    const data = {
      first_name: firstname,
      last_name: lastname,
      email,
      password,
      password_confirmation: passwordConfirmation
    };
    try {
      const response = await axios({
        method: 'POST',
        url: 'https://notflixtv.herokuapp.com/api/v1/users',
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
          firstname
          <input value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
        </label>
        <label style={{ display: 'block' }}>
          lastname
          <input value={lastname} onChange={(e) => setLastname(e.target.value)}/>
        </label>
        <label style={{ display: 'block' }}>
          email
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
        </label>
        <label style={{ display: 'block' }}>
          password
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
        </label>
        <label style={{ display: 'block' }}>
          password confirmation
          <input value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} type="password" />
        </label>

        <button type="submit" value="Submit">register</button>
      </form>
      <Link to="/">Login</Link>
    </div>
  );
}