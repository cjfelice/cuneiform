import React, { useState } from 'react';
import firebase from 'firebase';
import { db } from '../config/firebase';

import Title from '../Title';

import { makeStyles } from '@material-ui/core/styles';
import { Button, Input, Modal } from '@material-ui/core';

function DeletePanel(props) {
  const user = firebase.auth().currentUser.displayName;
  const { panel_id, username } = props;

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
  const [deletePanel, setDeletePanel] = useState('');
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    db.collection('panels')
      .doc(panel_id)
      .delete()
      .then(() => {
        console.log('Document successfully deleted!');
      })
      .catch((error) => {
        console.error('Error removing document: ', error);
      });
    setOpen(false);
  };

  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className='chimera__signup'>
            <Title text='chiMera' />

            <Input
              placeholder={`TYPE 'delete'`}
              type='text'
              value={deletePanel}
              onChange={(e) => setDeletePanel(e.target.value)}
            />
            <Button
              disabled={!deletePanel}
              onClick={() => {
                handleDelete();
              }}
            >
              DELETE
            </Button>
          </form>
        </div>
      </Modal>
      {user === username ? (
        <Button
          variant='contained'
          color='primary'
          style={{ color: 'white', marginLeft: 'auto' }}
          onClick={() => setOpen(true)}
        >
          Delete
        </Button>
      ) : (
        <p>{username}'s creation</p>
      )}
    </>
  );
}

export default DeletePanel;
