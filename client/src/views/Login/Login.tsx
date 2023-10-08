import React from 'react';
import LoginForm from './components/LoginForm';

const Login: React.FC = () => {
  // Define callback functions for login success and failure
  const handleLoginSuccess = (token: string) => {
    // Handle successful login (e.g., redirect to a protected route)
    console.log('Login successful. Token:', token);
    // Redirect the user or perform other actions
    // For example, you can use React Router to navigate:
    // history.push('/dashboard');
  };

  const handleLoginFailure = (error: string) => {
    // Handle login failure (e.g., display an error message)
    console.error('Login failed:', error);
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginForm
        onLoginSuccess={handleLoginSuccess}
        onLoginFailure={handleLoginFailure}
      />
    </div>
  );
};

export default Login;
