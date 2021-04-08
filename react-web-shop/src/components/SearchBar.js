import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

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
}));


export default function SearchBar(props) {
    const classes = useStyles();

    const keyword = props.keyword;
    const handleSearch = props.handleSearch;

    return (
        <Paper component="form" className={classes.root}>
            <InputBase
                className={classes.input}
                placeholder="Search products..."
                value={keyword}
                onChange={handleSearch}
            />
            <Divider className={classes.divider} orientation="vertical" />
            <IconButton type="submit" className={classes.iconButton} aria-label="search"  >
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}
