import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import { Alert } from '@material-ui/lab';
import { useAuth } from '../contexts/AuthContext';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
import UpdateProfile from './UpdateProfile';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    container: {
        '& > *': {
            margin: theme.spacing(1),
        }
    }
}));


export default function Account() {
    const classes = useStyles();

    const [error, setError] = useState('');
    const { currentUser, signout } = useAuth();
    const history = useHistory();

    const handleSignout = async () => {
        setError('');

        try {
            await signout();
            history.push('/');
        } catch {
            setError('Failed to sign out.');
        }
    }

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    return (
        <div className={classes.root}>
            <h1>Account</h1>
            {error && <Alert severity="error">{error}</Alert>}
            <strong>Email: </strong>{currentUser.email}
            <Container className={classes.container}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleOpen}
                >
                    Update Profile
                </Button>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleSignout}
                >
                    Sign Out
                </Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    style={{ display: 'flex' }}
                >
                    <UpdateProfile />
                </Modal>
            </Container>
            {currentUser && currentUser.email === 'admin@admin.com' ?
                <h1>Adfsdfsdf</h1>
                : ''
            }
        </div>
    )
}
