import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Auth.css';
import { TextField, Button } from '@mui/material';

const Auth = () => {
  const [signIn, setSignIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobile, setMobile] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setSignIn(true);
    }, 200);
  }, []);

  const toggle = () => {
    setSignIn(!signIn);
  };

  const handleSignIn = async () => {
    try {
      const response = await axios.post('http://localhost:5000/signin', {
        email,
        password,
      });
      alert(response.data.message);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/signup', {
        mobile,
        email,
        password,
      });
      alert(response.data.message);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div id="container" className={`container ${signIn ? 'sign-in' : 'sign-up'}`}>
      <div className="row">
        <div className="col align-items-center flex-col sign-up">
          <div className="form-wrapper align-items-center">
            <div className="form sign-up">
              <div className="input-group">
                <i className='bx bxs-phone'></i>
                <TextField size="small" type="tel" placeholder="Mobile Number" fullWidth margin="normal" value={mobile} onChange={(e) => setMobile(e.target.value)} />
              </div>
              <div className="input-group">
                <i className='bx bx-mail-send'></i>
                <TextField size="small" type="email" placeholder="Email" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="input-group">
                <i className='bx bxs-lock-alt'></i>
                <TextField size="small" type="password" placeholder="Password" fullWidth margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="input-group">
                <i className='bx bxs-lock-alt'></i>
                <TextField size="small" type="password" placeholder="Confirm password" fullWidth margin="normal" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              </div>
              <Button fullWidth variant="contained" color="primary" onClick={handleSignUp}>
                Sign up
              </Button>
              <p className="account-exist">
                <span>Already have an account?</span>
                <b onClick={toggle} className="pointer">Sign in here</b>
              </p>
            </div>
          </div>
        </div>
        <div className="col align-items-center flex-col sign-in">
          <div className="form-wrapper align-items-center">
            <div className="form sign-in">
              <div className="input-group">
                <i className='bx bxs-user'></i>
                <TextField size="small" type="email" placeholder="Email" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="input-group">
                <i className='bx bxs-lock-alt'></i>
                <TextField size="small" type="password" placeholder="Password" fullWidth margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <Button fullWidth variant="contained" color="primary" onClick={handleSignIn}>
                Sign in
              </Button>
              <p>
                <b>Forgot password?</b>
              </p>
              <p className="account-exist">
                <span>Don't have an account?</span>
                <b onClick={toggle} className="pointer">Sign up here</b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row content-row">
        <div className="col align-items-center flex-col">
          <div className="text sign-in">
            <h2>Welcome</h2>
          </div>
          <div className="img sign-in"></div>
        </div>
        <div className="col align-items-center flex-col">
          <div className="img sign-up"></div>
          <div className="text sign-up">
            <h2>Join us</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
