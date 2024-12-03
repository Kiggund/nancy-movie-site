import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from './mockAuthService';
import './App.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(username, password);
      alert('Signup successful!');
      navigate('/movies'); // Redirect to the movie page
    } catch (error) {
        setError('Signup failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='formContainer'>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        className="inputField"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="inputField"
      />
      <button type="submit" className='submitButton'>Signup</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default Signup;