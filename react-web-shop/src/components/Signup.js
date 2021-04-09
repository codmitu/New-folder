import { Box, Container, Paper, Link } from '@material-ui/core';
import React, { useRef, useState } from 'react';
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
        },
        '& .MuiOutlinedInput-input': {
            padding: '15px 14px',
            fontSize: '1.3em',
        },
    },
}));


export default function Signup({ setAction, handleClose }) {
    const classes = useStyles();

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match.');
        }

        try {
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            history.push('/account');
            handleClose();
        } catch {
            setError('Failed to create an account.');
        }
        setLoading(false);
    }

    return (
        <Container style={{ placeSelf: 'center', maxWidth: 400 }}>
            <Paper>
                <form className={classes.root} autoComplete="off" onSubmit={handleSubmit}>
                    <h2>Sign Up</h2>
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
                    <Box>
                        <TextField
                            label="Password Confirmation"
                            type="password"
                            variant="outlined"
                            fullWidth="true"
                            inputRef={passwordConfirmRef}
                        />
                    </Box>
                    <Button type="submit" variant="contained" color="primary" disabled={loading}>
                        Sign Up
                    </Button>
                    <Link to="" style={{ margin: '0 auto' }} onClick={() => setAction('signin')}>Already have an account? Sign In.</Link>
                </form>
            </Paper>
        </Container>
    )
}