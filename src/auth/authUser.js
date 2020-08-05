import React, { useState, useEffect } from 'react';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Input } from '@material-ui/core';
import './authUser.css';
import { authorize } from '../config/firebase';
import Title from '../Title';

function UserAuth() {
  function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`
    };
  }

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
    }
  }));

  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = authorize.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [user, name]);

  const signUp = (event) => {
    event.preventDefault();
    authorize
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: name
        });
      })
      .catch((error) => alert(error.message));

    setOpen(false);
  };

  const enterApp = (event) => {
    event.preventDefault();
    authorize
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));
    setSignIn(false);
  };

  return (
    <div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className='chimera__signup'>
            <Title text='chiMera' />

            <Input
              placeholder='username'
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder='email'
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder='password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type='submit' onClick={signUp}>
              Signup
            </Button>
          </form>
        </div>
      </Modal>

      <Modal open={signIn} onClose={() => setSignIn(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className='chimera__signup'>
            <Title text='chiMera' />

            <Input
              placeholder='email'
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder='password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type='submit' onClick={enterApp}>
              Sign In
            </Button>
          </form>
        </div>
      </Modal>
      <div>
        <h1>{name}</h1>
      </div>

      {user ? (
        <Button onClick={() => authorize.signOut()}>Sign Out</Button>
      ) : (
        <div className='chimera__loginContainer'>
          <Button onClick={() => setSignIn(true)}>Sign In</Button>
          <Button onClick={() => setOpen(true)}>Sign Up!</Button>
        </div>
      )}
    </div>
  );
}

export default UserAuth;
