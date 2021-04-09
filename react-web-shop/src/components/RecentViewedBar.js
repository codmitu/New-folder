import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Link } from 'react-router-dom';
import image1 from '../images/xr_1.jpg'
import image2 from '../images/img.jpg'


const useStyles = makeStyles((theme) => ({
    root: {
        paddingBottom: 20,
    },
    container: {
        display: 'flex',
        overflowY: 'hidden',
        overflowX: 'auto',
        gap: 20,
        padding: '0 20px',
        margin: '0 auto',
        maxWidth: 1500,
        '& > *': {
            padding: 10,
            minWidth: 200,
        },
        '& *': {
            margin: 0,
        }
    },
}));


export default function RecentViewedBar() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };


    return (
        <section className="recent-viewed-bar">
            <div className={classes.root}>
                <FormControlLabel
                    control={<Switch checked={checked} onChange={handleChange} />}
                    label="Recent viewed products."
                    style={{ marginLeft: 20 }}
                />
                <div className={classes.container}>
                    <Grow in={checked}>
                        <Paper elevation={1}>
                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, repellendus?</h5>
                            <Link to="details.html?index={index}">
                                <img alt="" src={image2} style={{ width: '100%' }} />
                            </Link>
                        </Paper>
                    </Grow>
                    {/* Conditionally applies the timeout prop to change the entry speed. */}
                    <Grow
                        in={checked}
                        style={{ transformOrigin: '0 0 0' }}
                        {...(checked ? { timeout: 1000 } : {})}
                    >
                        <Paper elevation={1}>
                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, repellendus?</h5>
                            <Link to="details.html?index={index}">
                                <img alt="" src={image1} style={{ width: '100%' }} />
                            </Link>
                        </Paper>
                    </Grow>
                    <Grow
                        in={checked}
                        style={{ transformOrigin: '0 0 0' }}
                        {...(checked ? { timeout: 1200 } : {})}
                    >
                        <Paper elevation={1}>
                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, repellendus?</h5>
                            <Link to="details.html?index={index}">
                                <img alt="" src={image2} style={{ width: '100%' }} />
                            </Link>
                        </Paper>
                    </Grow>
                    <Grow
                        in={checked}
                        style={{ transformOrigin: '0 0 0' }}
                        {...(checked ? { timeout: 1400 } : {})}
                    >
                        <Paper elevation={1}>
                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, repellendus?</h5>
                            <Link to="details.html?index={index}">
                                <img alt="" src={image1} style={{ width: '100%' }} />
                            </Link>
                        </Paper>
                    </Grow>
                    <Grow
                        in={checked}
                        style={{ transformOrigin: '0 0 0' }}
                        {...(checked ? { timeout: 1600 } : {})}
                    >
                        <Paper elevation={1}>
                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, repellendus?</h5>
                            <Link to="details.html?index={index}">
                                <img alt="" src={image2} style={{ width: '100%' }} />
                            </Link>
                        </Paper>
                    </Grow>
                    <Grow
                        in={checked}
                        style={{ transformOrigin: '0 0 0' }}
                        {...(checked ? { timeout: 1800 } : {})}
                    >
                        <Paper elevation={1}>
                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, repellendus?</h5>
                            <Link to="details.html?index={index}">
                                <img alt="" src={image1} style={{ width: '100%' }} />
                            </Link>
                        </Paper>
                    </Grow>
                </div>
            </div>
        </section>
    )
}
