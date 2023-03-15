import { useState } from 'react';
import {
  SignInButton,
  SignOutButton,
  useUser
} from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

export default function App() {
  const { isLoaded, isSignedIn, user } = useUser();

  return (
    <div id="app">
      {
        !isSignedIn ? <SignInButton /> : <SignOutButton />
      }
      
      { isSignedIn ? <Link to="home" >Home</Link> : null }
    </div>
  );
}
