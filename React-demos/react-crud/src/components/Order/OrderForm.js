import { Grid, InputAdornment, makeStyles, ButtonGroup, Button as MuiButton } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import Form from '../../layouts/Form'
// import { Input, Select, Button } from '../../controls'
import Input from '../../controls/Input'
import Select from '../../controls/Select'
import Button from '../../controls/Button'
import ReplayIcon from '@material-ui/icons/Replay';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import ReorderIcon from '@material-ui/icons/Reorder';
import { createAPIEndpoint } from '../../api'




const pMethods = [
    { id: "none", title: "Select" },
    { id: "Cash", title: "Cash" },
    { id: "Card", title: "Card" }
]

const useStyles = makeStyles(theme => ({
    adornmentText: {
        '& .MuiTypography-root': {
            color: '#f3b33d',
            fontWeight: 'bolder',
            fontSize: '1.5rem'
        }
    },
    submitButtonGroup: {
        backgroundColor: '#f3b33d',
        color: '#000',
        margin: theme.spacing(1),
        '& .MuiButton-label': {
            textTransform: 'none'
        },
        '&:hover': {
            backgroundColor: '#f3b33d'
        }
    }
}))


export default function OrderForm(props) {

    const { values, errors, handleInputChange } = props;
    const classes = useStyles();

    const [x, setX] = useState();
    useEffect(() => {
        createAPIEndpoint
    }, []);

    return (
        <Form>
            <Grid container>
                <Grid item xs={6}>
                    <Input
                        disabled
                        label="Order Number"
                        name="orderNumber"
                        value={values.orderNumber}
                        InputProps={{
                            startAdornment: <InputAdornment position="start" className={classes.adornmentText}>#</InputAdornment>
                        }}
                    />
                    <Select
                        label="Customer"
                        name="customerId"
                        onChange={handleInputChange}
                        value={values.customerId}
                        options={[
                            { id: 0, title: 'Select' },
                            { id: 1, title: 'Customer 1' },
                            { id: 2, title: 'Customer 2' },
                            { id: 3, title: 'Customer 3' },
                            { id: 4, title: 'Customer 4' }
                        ]}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Select
                        label="Payment Method"
                        onChange={handleInputChange}
                        name="pMethod"
                        value={values.pMethod}
                        options={pMethods}
                    />
                    <Input
                        disabled
                        label="Grand Total"
                        name="gTotal"
                        values={values.gTotal}
                        InputProps={{
                            startAdornment: <InputAdornment position="start" className={classes.adornmentText}>$</InputAdornment>
                        }}
                    />
                    <ButtonGroup className={classes.submitButtonGroup}>
                        <MuiButton size="large" type="submit" endIcon={<RestaurantMenuIcon />}>Submit</MuiButton>
                        <MuiButton size="small" startIcon={<ReplayIcon />} />
                    </ButtonGroup>
                    <Button
                        size="large"
                        startIcon={<ReorderIcon />}
                    >
                        Orders
                    </Button>
                </Grid>
            </Grid>
        </Form>
    )
}
