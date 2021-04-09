import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useLocation } from "react-router-dom";
import VerticalAlignTopIcon from '@material-ui/icons/VerticalAlignTop';


const useStyles = makeStyles(() => ({
    footerButton: {
        '& > *': {
            width: '100%',
            margin: 0,
            borderRadius: 0,
            fontSize: 10,
            padding: 10,
            backgroundColor: 'rgb(34 37 63)',
            '&:hover': {
                backgroundColor: 'rgb(44 48 82)',
            },
        },
    },
    footer: {
        display: 'flex',
        width: '100%',
        maxWidth: 1200,
        margin: '0 auto',
        color: 'grey',
        flexWrap: 'wrap',
        '& h4': {
            letterSpacing: 1,
            margin: '10px 0',
            textAlign: 'center',
            textDecoration: 'underline',
        },
        '& > div': {
            display: 'flex',
            flex: '1 1 400px',
            justifyContent: 'space-around',
            margin: '40px 0',
        }
    },
    links: {
        display: 'flex',
        flexDirection: 'column',
        '& span': {
            lineHeight: 1.5,
            textAlign: 'center',
            '&:hover': {
                color: 'lightgrey',
                cursor: 'pointer',
            }
        }
    }
}));

export default function Footer() {
    const classes = useStyles();
    const location = useLocation();

    return (
        <section style={{ backgroundColor: 'rgb(25 28 49)' }}>
            <div className={classes.footerButton}>
                {location.pathname.length <= 2 ?
                    <Button href="" style={{ color: 'white' }} onClick={() => window.scrollTo(0, 0)} endIcon={<VerticalAlignTopIcon style={{ fontSize: 16 }} />}><p>Back to top</p></Button> :
                    <Button disabled style={{ color: 'grey' }} endIcon={<VerticalAlignTopIcon style={{ fontSize: 16 }} />}><p>Back to top</p></Button>}
            </div>
            <div className={classes.footer}>
                <div>
                    <div>
                        <h4>POPULAR SEARCHES</h4>
                        <div className={classes.links}>
                            <span>Cheap phones</span>
                            <span>Chinesse laptops</span>
                            <span>4K TV's</span>
                            <span>Gaming laptops</span>
                        </div>
                    </div>
                    <div>
                        <h4>OUR COMPANY</h4>
                        <div className={classes.links}>
                            <span>About Us</span>
                            <span>Contact Us</span>
                            <span>Health & Safety</span>
                            <span>Media Center</span>
                            <span>Trade Enquiries</span>
                            <span>Latest News</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h4>YOUR ORDER</h4>
                        <div className={classes.links}>
                            <span>Delivery & Return</span>
                            <span>Terms & Conditions</span>
                            <span>Saved Items</span>
                        </div>
                    </div>
                    <div>
                        <h4>HELP & INFORMATION</h4>
                        <div className={classes.links}>
                            <span>Price Promise</span>
                            <span>Cookie Policy</span>
                            <span>Privacy Policy</span>
                            <span>Site Map</span>
                            <span>Quality Policy</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
