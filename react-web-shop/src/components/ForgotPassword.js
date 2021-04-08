import { Box, Container, Link, Paper } from '@material-ui/core';
import React, { useState, useRef } from 'react';
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
            // width: '100%',
            // width: '25ch',
        },
        '& .MuiOutlinedInput-input': {
            padding: '15px 14px',
            fontSize: '1.3em',
        },
        '& .MuiFormLabel-root': {
            // lineHeight: '40px'
        }
    },
}));


export default function ForgotPassword({ setAction, handleClose }) {
    const classes = useStyles();

    const emailRef = useRef();
    const { changePassword } = useAuth();

    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            setMessage('');
            setError('');
            setLoading(true);
            await changePassword(emailRef.current.value);
            setMessage('Check your inbox to change your password.')
        } catch {
            setError('Failed to change password.');
        }
        setLoading(false);
    }



    return (
        <Container style={{ placeSelf: 'center', maxWidth: 400 }}>
            <Paper>
                <form className={classes.root} autoComplete="off" onSubmit={handleSubmit}>
                    <h2>Change Password</h2>
                    {error && <Alert severity="error">{error}</Alert>}
                    {message && <Alert severity="info">{message}</Alert>}
                    <Box>
                        <TextField
                            label="Email"
                            type="email"
                            variant="outlined"
                            autoFocus="true"
                            fullWidth="true"
                            inputRef={emailRef}
                        />
                    </Box>
                    <Button type="submit" variant="contained" color="primary" disabled={loading}>
                        Change Password
                    </Button>
                    <Box style={{ margin: '0 auto' }}>
                        <Link onClick={() => setAction('signin')} >Sign In</Link>
                    </Box>
                </form>
            </Paper>
        </Container>
    )
}
