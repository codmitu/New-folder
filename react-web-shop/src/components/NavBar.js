import React, { useState } from 'react';
import Logo from '../images/logo3.svg';
import Box from '@material-ui/core/Box';
import { Link, useHistory } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Modal from '@material-ui/core/Modal';
import Signin from './Signin';
import Signup from './Signup';
import { useAuth } from '../contexts/AuthContext';
import ForgotPassword from './ForgotPassword';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: 55,
        marginLeft: 180,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        fontSize: "1.4rem"
    },
    iconButton: {
        padding: 10,
        '& > * ': {
            padding: 10,
        }
    },
    divider: {
        height: 28,
        margin: 4,
    },
    button: {
        padding: 0
    },
}));


export default function NavBar(props) {
    const classes = useStyles();

    const history = useHistory();

    const keyword = props.keyword;
    const handleSearch = props.handleSearch;

    const [txt, setTxt] = useState(keyword);
    const [typingTimeout, setTypingTimeout] = useState(0);

    const { currentUser } = useAuth();

    const handleChange = (event) => {
        if (typingTimeout) {
            clearTimeout(typingTimeout);
        }
        setTxt(event.target.value);
        console.log(event.target.value);
        setTypingTimeout(setTimeout(function () {
            handleSearch(event.target.value);
        }, 1000));
    }


    const [open, setOpen] = useState(false);
    const [action, setAction] = useState('signin');

    const handleOpen = () => {
        if (currentUser && currentUser.email) {
            history.push("/account");
        } else {
            setOpen(true);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };



    return (
        <Box component="span" m={1} display="flex" className="nav-bar">
            <img src={Logo} alt="tech supplies logo" className="logo" />
            <Paper component="form" className={classes.root}>
                <InputBase
                    className={classes.input}
                    placeholder="Search products..."
                    value={txt}
                    onChange={handleChange}
                />
                <Divider className={classes.divider} orientation="vertical" />
                <IconButton type="submit" className={classes.iconButton} aria-label="search" onClick={e => { e.preventDefault(); }} >
                    <SearchIcon />
                </IconButton>
            </Paper>
            <div className="nav-links">
                <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                    <Button className={classes.button}>
                        <Link to="/">Home
                            <HomeIcon fontSize="small" />
                        </Link>
                    </Button>
                    <Button className={classes.button}>
                        <Link to="/wishlist">Wishlist
                            <FavoriteIcon fontSize="small" />
                        </Link>
                    </Button>
                    <Button className={classes.button}>
                        <Link to="/cart">Cart
                            <ShoppingCartIcon fontSize="small" />
                        </Link>
                    </Button>
                    <Button className={classes.button} onClick={handleOpen}>
                        <Link to=''>Account
                            <AccountCircleIcon fontSize="small" />
                        </Link>
                    </Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        style={{ display: 'flex' }}
                    >
                        {action === 'signin' ?
                            <Signin setAction={setAction} handleClose={handleClose} />
                            : action === 'signup' ?
                                <Signup setAction={setAction} handleClose={handleClose} />
                                : <ForgotPassword setAction={setAction} handleClose={handleClose} />
                        }
                    </Modal>
                </ButtonGroup>
            </div>
        </Box>
    )
};
