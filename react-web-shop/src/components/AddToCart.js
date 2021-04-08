import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import TuneIcon from '@material-ui/icons/Tune';
import Button from '@material-ui/core/Button';
import Favorite from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ToggleButton from '@material-ui/lab/ToggleButton';


const useStyles = makeStyles((theme) => ({
    root: {
        '& h3': {
            margin: '5px 0',
        }
    },
    input: {
        width: 42,
    },
    buttons: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
        '& > div': {
            width: '100%',
            display: 'flex',
        },
        '& button': {
            flex: 1,
            color: 'white',
            '& svg': {
                marginLeft: 5,
            }
        }
    },
}));



export default function AddToCart({ product }) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [selectedCart, setSelectedCart] = useState(false);
    const [selectedFav, setSelectedFav] = useState(false);



    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleBlur = () => {
        if (value < 0) {
            setValue(0);
        } else if (value > product.stock) {
            setValue(product.stock);
        }
    };




    return (
        <section className={classes.root}>
            <div>
                <small>In stock:
                    <span> {product.stock}</span>
                </small>
                <h3>Price:
                    <strong style={{ color: '#ff5722' }}>
                        <span> {product.price.toLocaleString("ro")} </span>RON
                    </strong>
                </h3>
            </div>
            <div>
                <Typography gutterBottom>Quantity:</Typography>
                <Grid container spacing={2} alignItems="center">
                    <Grid item>
                        <TuneIcon color="primary" fontSize="medium" />
                    </Grid>
                    <Grid item xs>
                        <Slider
                            value={typeof value === 'number' ? value : 0}
                            onChange={handleSliderChange}
                            aria-labelledby="input-slider"
                            max={product.stock}
                        />
                    </Grid>
                    <Grid item>
                        <Input
                            className={classes.input}
                            value={value}
                            margin="dense"
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            inputProps={{
                                step: 1,
                                min: 0,
                                max: product.stock,
                                type: 'number',
                                'aria-labelledby': 'input-slider',
                            }}
                        />
                    </Grid>
                </Grid>
                <div className={classes.buttons}>
                    {/* <ButtonGroup color="primary" aria-label="contained primary button group"> */}
                    <Button variant="contained" color="primary" style={{ padding: 0 }}>
                        <ToggleButton
                            selected={selectedCart}
                            onChange={() => {
                                setSelectedCart(!selectedCart);
                            }}
                        >
                            <Typography style={{ color: 'white' }} >Add to Cart</Typography>
                            {!selectedCart ? <ShoppingCartIcon /> : <ShoppingCartIcon style={{ color: 'lightgreen' }} />}
                        </ToggleButton>
                    </Button>
                    <Button variant="contained" style={{ padding: 0 }}>
                        <ToggleButton
                            selected={selectedFav}
                            onChange={() => {
                                setSelectedFav(!selectedFav);
                            }}
                        >
                            <Typography style={{ color: 'white' }} >Add to Wishlist</Typography>
                            {!selectedFav ? <Favorite /> : <Favorite color="secondary" />}
                        </ToggleButton>
                    </Button>
                    {/* </ButtonGroup> */}
                </div>
            </div>
        </section >
    )
}
