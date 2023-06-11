import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../store/authSlice';
import { useNavigate } from 'react-router-dom';
import { data } from '../../utils/data';
import { ToastContainer, toast } from 'react-toastify';
import './style.scss';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const handleLogin = () => {
    const user = data.find((user) => user.username === username && user.password === password);

    if (user) {
      dispatch(login(user));
      sessionStorage.setItem('user', JSON.stringify(user));
      toast.success("Login Success")
      navigate('/');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h1 className="login-title">Welcome Back</h1>
        <form className="login-form">
          <div
            className={`login-input-container ${isUsernameFocused ? 'focused' : ''}`}
          >
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onFocus={() => setIsUsernameFocused(true)}
              onBlur={() => setIsUsernameFocused(false)}
              className="login-input"
            />
          </div>
          <div
            className={`login-input-container ${isPasswordFocused ? 'focused' : ''}`}
          >
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setIsPasswordFocused(true)}
              onBlur={() => setIsPasswordFocused(false)}
              className="login-input"
            />
          </div>
          <button onClick={handleLogin} className="login-button">
            Login
          </button>
        </form>
      </div>
      <div className="login-background"></div>
      <ToastContainer/>
    </div>
  );
};

export default Login;