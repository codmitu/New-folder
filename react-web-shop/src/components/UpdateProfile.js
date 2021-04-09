import { Box, Container, Paper } from '@material-ui/core';
import React, { useRef, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useAuth } from '../contexts/AuthContext';
import { Alert } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
            margin: theme.spacing(1),
        },
        '& .MuiOutlinedInput-input': {
            fontSize: '1em',
        },
    },
}));


export default function UpdateProfile() {
    const classes = useStyles();

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { currentUser, updateEmail, updatePassword } = useAuth();

    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);


    const handleSubmit = (event) => {
        event.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match.');
        }

        const promises = [];
        setLoading(true);
        setMessage('');
        setError('');
        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value));
        }
        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value));
        }

        Promise.all(promises).then(() => {
            setMessage('Your profile has been updated, close this message to see the changes.');
        }).catch(() => {
            setMessage('');
            setError('Failed to update profile.');
        }).finally(() => {
            setLoading(false);
        })
        event.target.reset();
    }

    return (
        <Container style={{ placeSelf: 'center', maxWidth: 400 }}>
            <Paper>
                <form className={classes.root} autoComplete="off" onSubmit={handleSubmit}>
                    <h2>Update Profile</h2>
                    {error && <Alert severity="error">{error}</Alert>}
                    {message && <Alert severity="success">{message}</Alert>}
                    <Box>
                        <TextField
                            label="Email"
                            type="email"
                            variant="outlined"
                            autoFocus="true"
                            fullWidth="true"
                            inputRef={emailRef}
                            defaultValue={currentUser && currentUser.email}
                        />
                    </Box>
                    <Box>
                        <TextField
                            label="Password"
                            type="password"
                            variant="outlined"
                            fullWidth="true"
                            inputRef={passwordRef}
                            placeholder="Change (Optional)"
                        />
                    </Box>
                    <Box>
                        <TextField
                            label="Password Confirmation"
                            type="password"
                            variant="outlined"
                            fullWidth="true"
                            inputRef={passwordConfirmRef}
                            placeholder="Confirm Change"
                        />
                    </Box>
                    <Button type="submit" variant="contained" color="primary" disabled={loading}>
                        Confirm Changes
                    </Button>
                </form>
            </Paper>
        </Container>
    )
}