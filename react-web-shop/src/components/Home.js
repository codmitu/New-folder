import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Fab from '@material-ui/core/Fab';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import { Box, Divider } from '@material-ui/core';
import Carousel from '@brainhubeu/react-carousel';
import img1 from '../images/bannersTop/img1.jpg';
import img2 from '../images/bannersTop/img2.jpg';
import img3 from '../images/bannersTop/img3.jpg';
import img4 from '../images/bannersTop/img4.jpg';
import img5 from '../images/bannersTop/img5.jpg';
import img6 from '../images/bannersTop/img6.jpg';
import img11 from '../images/bannersBottom/img11.png';
import img12 from '../images/bannersBottom/img12.png';
import img13 from '../images/bannersBottom/img13.png';
import img14 from '../images/bannersBottom/img14.png';
import img15 from '../images/bannersBottom/img15.png';
import '@brainhubeu/react-carousel/lib/style.css';
import Favorite from '@material-ui/icons/Favorite';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(2),
        },
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
    main: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 20,
        padding: 20,
        margin: '0 auto',
        maxWidth: 1500,
        '& > *': {
            padding: 20,
        },
    },
    favoriteIcon: {
        width: 40,
        height: 40,
        position: "absolute",
        right: 20,
        bottom: 20,
    },
    paper: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        '& *': {
            margin: 0,
        },
        '& small': {
            display: 'block',
        },
        '& aside': {
            display: 'inline-block',
            '& p': {
                color: 'black',
                fontWeight: 500,
            }
        }
    },
    link: {
        display: 'flex',
        textDecoration: 'none',
        color: 'black',
        '& aside': {
            paddingLeft: 20,
            '& h5:nth-child(2)': {
                padding: '20px 0 5px 0',
            },
            '& small': {
                color: '#1c54b2',
                lineHeight: 1.6,
            }
        }
    },
}));


export default function Home(props) {
    const classes = useStyles();

    const product = props.product;
    const maxprice = props.maxprice;
    const newData = props.newData;
    const loading = props.loading;
    const sorting = props.sorting;
    const keyword = props.keyword;

    const [open] = useState(true);
    const [page, setPage] = useState(1);
    const itemsPerPage = 19;
    const noOfPages = Math.ceil(newData.length / itemsPerPage);


    function handleChange(event, value) {
        setPage(value);
    };

    const history = useHistory();
    const handleURL = (page) => {
        history.push(page);
    }


    const location = useLocation();
    let urlPage = parseInt(location.pathname.replace(/^\D+/g, ''));

    useEffect(() => {
        if (Math.ceil(newData.length / itemsPerPage) < urlPage) {
            history.push('/')
        }
    }, [maxprice, keyword, history, newData.length, urlPage])

    setTimeout(() => {
        if (location.pathname === "/" || product !== '') {
            urlPage = 1;
        }
        handleChange(undefined, urlPage);
    }, 100);

    const data2 = newData.sort(dynamicSort(sorting === 1 ? "" : sorting === 2 ? "price" : "-price"))
        .slice((page - 1) * itemsPerPage, page * itemsPerPage);



    function dynamicSort(property) {
        var sortOrder = 1;
        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a, b) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }


    return (
        <>
            {loading && (
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
                    </Backdrop>
                </div>
            )}
            {newData && <main className={classes.main}>
                {/* TOP PAGE ADS */}
                <Box style={{ gridColumn: '3/5', gridRow: '1/3', padding: 0 }}>
                    <Carousel
                        autoPlay={5000}
                        infinite
                        animationSpeed={1000}
                    >
                        <img src={img1} alt='' />
                        <img src={img2} alt='' />
                        <img src={img3} alt='' />
                        <img src={img4} alt='' />
                        <img src={img5} alt='' />
                        <img src={img6} alt='' />
                    </Carousel>
                </Box>
                {/* BOTTOM PAGE ADS */}
                <Box style={{ gridColumn: '1/5', gridRow: '7/8', padding: 0 }} >
                    <Carousel
                        autoPlay={5000}
                        infinite
                        animationSpeed={1000}
                        slidesPerPage={1}
                        slidesPerScroll={1}
                    >
                        <img src={img11} alt='' />
                        <img src={img12} alt='' />
                        <img src={img13} alt='' />
                        <img src={img14} alt='' />
                        <img src={img15} alt='' />
                    </Carousel>
                </Box>
                {/* DATABASE ITEMS */}
                {data2.map((item, index) => (
                    index % 10 === 0 && index !== 0 ?
                        <Paper
                            elevation={3}
                            className={classes.paper}
                            key={index}
                            data={index}
                            style={{ gridColumn: '1/3', gridRow: '4/5' }}
                        >
                            <div style={{ display: 'none' }} className="item-id">id</div>
                            <div style={{ display: 'none' }} className="info">info</div>
                            <h4>{item.name}</h4>
                            <Link to={`/details/${item.name}`} onClick={() => window.scrollTo(0, 0)} className={classes.link} >
                                {item.image[0] === ''
                                    ? <img src='no-image.png' alt="" style={{ maxHeight: 310 }} />
                                    : <img src={item.image[0]} alt="" style={{ maxHeight: 310 }} />}
                                <aside>
                                    <h5>Description: {item.description}</h5>
                                    <h5>Specifications:</h5>
                                    <Divider style={{ maxWidth: 200 }} />
                                    {item.specs.map((spec, nr) => (
                                        <small key={nr}>{spec}</small>
                                    ))}
                                </aside>
                            </Link>
                            <div>
                                <small>In stock:
                                <span className="item-stock"> {item.stock}</span>
                                </small>
                                <p>Price:
                                <strong style={{ color: '#ff5722' }}>
                                        <span className="price-item"> {item.price.toLocaleString("ro")} </span>RON
                                </strong>
                                </p>
                            </div>
                            <Fab color="primary" aria-label="like" className={classes.favoriteIcon}>
                                <FormControlLabel
                                    control={<Checkbox icon={<Favorite style={{ color: 'white' }} />} checkedIcon={<Favorite />} name="checkedH" />}
                                />
                            </Fab>
                        </Paper>
                        :
                        <Paper
                            elevation={1}
                            className={classes.paper}
                            key={index}
                            data={index}
                        >
                            <div style={{ display: 'none' }} className="item-id">id</div>
                            <div style={{ display: 'none' }} className="info">info</div>
                            <h4>{item.name}</h4>
                            <Link to={`/details/${item.name}`}>
                                {item.image[0] === ''
                                    ? <img src='no-image.png' alt="" style={{ maxWidth: '100%' }} />
                                    : <img src={item.image[0]} alt="" style={{ maxWidth: '100%' }} />}
                            </Link>
                            <div>
                                <small>In stock:
                                    <span className="item-stock"> {item.stock}</span>
                                </small>
                                <p>Price:
                                    <strong style={{ color: '#ff5722' }}>
                                        <span className="price-item"> {item.price.toLocaleString("ro")} </span>RON
                                    </strong>
                                </p>
                            </div>
                            <Fab color="primary" aria-label="like" className={classes.favoriteIcon}>
                                <FormControlLabel
                                    control={<Checkbox icon={<Favorite style={{ color: 'white' }} />} checkedIcon={<Favorite />} name="checkedH" />}
                                />
                            </Fab>
                        </Paper>
                ))}
            </main>}
            <Grid container justify="center">
                <div className={classes.root}>
                    <Pagination
                        onChange={handleChange}
                        count={noOfPages}
                        page={page}
                        defaultPage={page}
                        color="primary"
                        hideNextButton={true}
                        hidePrevButton={true}
                        onClick={(e) => { handleURL(e.target.innerText); window.scrollTo(0, 0); }}
                    />
                </div>
            </Grid>
        </>
    )
}
