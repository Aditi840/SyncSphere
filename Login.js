// src/components/Login.js
import React, { useState } from 'react';
import './Login.css';
import { GoogleLogin } from '@react-oauth/google';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic (API calls, validation)
    console.log("Logging in with:", username, password);
  };

  // Google login success handler
  const handleGoogleLoginSuccess = (credentialResponse) => {
    console.log('Google login successful:', credentialResponse);
    setIsAuthenticated(true); // Set the authenticated state
  };

  // Google login failure handler
  const handleGoogleLoginFailure = (error) => {
    console.log('Google login failed:', error);
  };

  return (
    <div className="app-container">  {/* This container will hold everything */}
      <h1 className="welcome-message">Welcome to SyncSphere</h1>  {/* Welcome Message */}
      
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-button">Login</button>
        </form>

        <div className="social-login">
          <p>Or connect with:</p>
          <div className="social-buttons">
            {/* Google login button */}
            <GoogleLogin
              onSuccess={handleGoogleLoginSuccess}
              onError={handleGoogleLoginFailure}
            />

            {/* Show these social media buttons regardless of authentication status */}
            <button className="whatsapp-button">Send Message on WhatsApp</button>
            <button className="twitter-button">Post on Twitter</button>
            <button className="facebook-button">Share on Facebook</button>
            <button className="instagram-button">Share on Instagram</button>
            <button className="linkedin-button">Share on LinkedIn</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
