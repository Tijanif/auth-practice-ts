import React, { SyntheticEvent, useState } from 'react';

import './App.css';

function App() {
  const [user, setUser] = useState(null);

  // handle signup to create a user
  const handleNewUser = async (e: SyntheticEvent) => {
    e.preventDefault();

    const newUser = await fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    }).then((res) => res.json());
    // if (newUser.error) {
    //   alert(newUser.error);
    // } else {
    //   setUser({ ...newUser.data });
    // }
    newUser.error ? alert(newUser.error) : setUser({ ...newUser.data });
  };

  // haddle login to login user
  const handleLogin = async (e: SyntheticEvent) => {
    e.preventDefault();

    const loggedInUser = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    }).then((res) => res.json());
    if (loggedInUser.error) {
      alert(loggedInUser.error);
    } else {
      alert(`Hello ${loggedInUser.user.username}! Welcome to your site`);
      setUser({ ...loggedInUser.user });
    }
  };

  // haddle logout user
  const handleLogout = async (e: SyntheticEvent) => {
    e.preventDefault();

    const loggedInUser = await fetch('http://localhost:3000/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    }).then((res) => res.json());
    if (loggedInUser.error) {
      alert(loggedInUser.error);
    } else {
      alert(`You are now logged out! See you next time`);
      // setUser({ ...loggedInUser.user });
    }
  };

  return (
    <div className='App'>
      <form onSubmit={(e) => handleLogin(e)}>
        <h1>Login Form</h1>
        <label>
          UserName:
          <input type='text' name='username' required />
        </label>
        <label>
          Password:
          <input type='password' name='password' required />
        </label>
        <button type='submit'>submit</button>
      </form>

      <form onSubmit={(e) => handleNewUser(e)}>
        <h1>NewUser Form</h1>
        <label>
          UserName:
          <input type='text' name='username' required />
        </label>
        <label>
          Password:
          <input type='text' name='password' required />
        </label>

        <button type='submit'>submit</button>
      </form>

      <button className='logout-button' onClick={(e) => handleLogout(e)}>
        Logout
      </button>
    </div>
  );
}

export default App;
