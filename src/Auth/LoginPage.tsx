import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginPage: React.FC = () => {
 const { loginWithRedirect } = useAuth0();
 
  return (
    <div>
      <button onClick={() => loginWithRedirect()}>Se connecter</button>
    </div>
  );

};

export default LoginPage;
