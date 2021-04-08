import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { Divider } from '@material-ui/core';
import { useLocation } from "react-router-dom";
import useAsync from './useAsync';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Slideshow from './Slideshow';
import AddToCart from './AddToCart';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        padding: 20,
        gap: 20,
        margin: '0 auto',
        maxWidth: 1500,
    },
    aside: {
        minWidth: 500,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        '& h3, & h2': {
            margin: '20px 0 5px 0',
        },
        '& p': {
            letterSpacing: 1,
            wordSpacing: 2,
            lineHeight: 1,
            color: '#1c54b2',
            fontWeight: 500,
        },
    },
    rating: {
        margin: '20px 0',
        width: 200,
        display: 'flex',
        alignItems: 'center',
        '& > span': {
            color: '#33c9dc',
            textDecoration: 'underline',
        }
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    top: {
        color: '#1af0ff',
        animationDuration: '550ms',
        textAlign: 'center',
    },
    circle: {
        strokeLinecap: 'round',
    },
}));

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};



export default function Details() {
    let { data, loading } = useAsync('https://online-shop-424e1-default-rtdb.europe-west1.firebasedatabase.app/Products/.json');
    const [open] = useState(true);
    const location = useLocation();
    const id = decodeURI(location.pathname.substr(9));
    const indexItem = data.findIndex(x => x.name === id);
    const product = data[indexItem];


    const randomProperty = obj => {
        let keys = Object.keys(obj);
        const random = Math.floor(Math.random() * keys.length);
        return keys[random];
    };

    const randomRatings = () => {
        const x = Math.floor(Math.random() * 1558);
        return x;
    }

    const randomStars = randomProperty(labels);
    const classes = useStyles();
    const [value] = useState(randomStars);
    const [hover] = useState(-1);



    return (
        <main className={classes.root}>
            { loading && (
                <div>
                    <Backdrop className={classes.backdrop} open={open}>
                        <CircularProgress
                            variant="indeterminate"
                            disableShrink
                            className={classes.top}
                            classes={{
                                circle: classes.circle,
                            }}
                            size={40}
                            thickness={4}
                        />
                        {/* Loading.... */}
                    </Backdrop>
                </div>
            )}
            {product &&
                <>
                    <aside className={classes.aside}>
                        <Slideshow product={product} />
                    </aside>
                    <aside className={classes.aside}>
                        <section>
                            <h2>{product.name}</h2>
                            <i>{product.description}</i>
                            <Divider style={{ maxWidth: "100%" }} />
                            <div className={classes.rating}>
                                <Rating
                                    name="hover-feedback"
                                    value={randomStars}
                                    precision={0.5}
                                // onChange={(event, newValue) => {
                                //     setValue(newValue);
                                //   }}
                                //   onChangeActive={(event, newHover) => {
                                //     setHover(newHover);
                                //   }}
                                />
                                {value !== null && <Box ml={2} mr={2} style={{ fontStyle: 'italic' }}>{labels[hover !== -1 ? hover : value]}</Box>}
                                <span>{randomRatings()}</span>
                                <span>&nbsp;ratings</span>
                            </div>
                            <h3>Specifications:</h3>
                            <Divider style={{ maxWidth: '100%' }} />
                            {product.specs.map(spec => (
                                <p>{spec}</p>
                            ))}
                        </section>
                        <AddToCart product={product} />
                    </aside>
                </>}
        </main >
    )
}
