import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Divider from '@material-ui/core/Divider';
import SortIcon from '@material-ui/icons/Sort';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import SubjectIcon from '@material-ui/icons/Subject';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 300,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        spacing: 8,
        fontSize: '0.5rem',
        backgroundColor: '#e1e1e1',
        '& .MuiInputBase-root': {
            color: '#3f51b5',
            fontWeight: 500,
            height: '30px',
        },
        '& .MuiFormLabel-root': {
            marginTop: '-14px',
        },
        '& .MuiInputLabel-shrink': {
            marginTop: '0px',
        }
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    divider: {
        height: 28,
        margin: 4,
    },
    inputNumber: {
        '& input': {
            color: "#3f51b5"
        }
    }

}));




export default function FilterBar(props) {
    const classes = useStyles();

    const product = props.product;
    const handleFiltered = props.handleFiltered;
    const maxprice = props.maxprice;
    const handleMaxprice = props.handleMaxprice;
    const handleSort = props.handleSort;
    const sorting = props.sorting;

    const marks = [
        {
            value: 1000,
            label: '1000 RON',
        },
        {
            value: 8000,
            label: '8.000 RON'
        },
        {
            value: 16000,
            label: 'ALL'
        },
    ]


    return (
        <div className="filter-bar">

            <FormControl variant="outlined" className={classes.formControl} >
                <InputLabel id="demo-simple-select-outlined-label">Phones</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={product}
                    onChange={handleFiltered}
                    label="Phones"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value="Phone Samsung" >Samsung</MenuItem>
                    <MenuItem value="Phone Apple" >Apple</MenuItem>
                    <MenuItem value="Phone Huawei" >Huawei</MenuItem>
                </Select>
            </FormControl>

            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Laptops</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={product}
                    onChange={handleFiltered}
                    label="Laptops"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value="Laptop Asus">Asus</MenuItem>
                    <MenuItem value="Laptop Acer">Acer</MenuItem>
                    <MenuItem value="Laptop HP">HP</MenuItem>
                </Select>
            </FormControl>

            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">TV's</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={product}
                    onChange={handleFiltered}
                    label="TV's"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value="Tv Samsung">Samsung</MenuItem>
                    <MenuItem value="Tv LG">LG</MenuItem>
                    <MenuItem value="Tv Philips">Philips</MenuItem>
                </Select>
            </FormControl>

            <Divider className={classes.divider} orientation="vertical" />

            <Typography id="discrete-slider" color="primary">
                Max&nbsp;price:
            </Typography>
            <Slider
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                value={maxprice}
                onChange={handleMaxprice}
                step={1000}
                marks={marks}
                min={1000}
                max={16000}
                style={{ margin: "-20px 160px 0 40px" }}
            />

            <Button
                variant="outlined"
                color="primary"
                style={{ position: "absolute", right: 10, height: 30 }}
                onClick={handleSort}
            >
                {sorting === 1 ?
                    <>
                        No Sort&nbsp;&nbsp;&nbsp;&nbsp;
                        <SubjectIcon />
                    </>
                    : sorting === 2 ?
                        <>
                            Sort Asc&nbsp;&nbsp;
                        <SortIcon style={{ transform: 'rotate(180deg)' }} />
                        </>
                        :
                        <>
                            Sort Desc
                        <SortIcon />
                        </>
                }
            </Button>
        </div >
    );
}