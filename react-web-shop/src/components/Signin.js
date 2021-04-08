import { Box, Container, Link, Paper } from '@material-ui/core';
import React, { useState, useRef } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
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


export default function Signin({ setAction, handleClose }) {
    const classes = useStyles();

    const emailRef = useRef();
    const passwordRef = useRef();
    const { signin } = useAuth();

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            setError('');
            setLoading(true);
            await signin(emailRef.current.value, passwordRef.current.value);
            history.push("/account");
            handleClose();
        } catch {
            setError('Failed to sign in.');
        }
        setLoading(false);
    }



    return (
        <Container style={{ placeSelf: 'center', maxWidth: 400 }}>
            <Paper>
                <form className={classes.root} autoComplete="off" onSubmit={handleSubmit}>
                    <h2>Sign In</h2>
                    {error && <Alert severity="error">{error}</Alert>}
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
                    <Box>
                        <TextField
                            label="Password"
                            type="password"
                            variant="outlined"
                            fullWidth="true"
                            inputRef={passwordRef}
                        />
                    </Box>
                    <Button type="submit" variant="contained" color="primary" disabled={loading}>
                        Sign In
                    </Button>
                    <Box style={{ margin: '0 auto' }}>
                        <Link onClick={() => setAction('signup')}>Create an account.</Link> /&nbsp;
                        <Link onClick={() => setAction('forgotPassword')}>Forgot password.</Link>
                    </Box>
                </form>
            </Paper>
        </Container>
    )
}
