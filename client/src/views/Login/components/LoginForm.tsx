import React, { useState } from 'react';
import axios from 'axios';

interface LoginFormProps {
  onLoginSuccess: (token: string) => void;
  onLoginFailure: (error: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess, onLoginFailure }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/user/login/', {
        email,
        password,
      });

      const token = response.data.token;

      // Store the token securely (e.g., in localStorage or a state management solution)
      localStorage.setItem('token', token);

      // Call the success callback with the token
      onLoginSuccess(token);

    } catch (error) {
      // Handle login error (e.g., show an error message to the user)
      onLoginFailure('Login failed. Please check your credentials.');
    }
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
