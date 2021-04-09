import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Wishlist from './components/Wishlist';
import Cart from './components/Cart';
import Account from './components/Account';
import NavBar from './components/NavBar';
import FilterBar from './components/FilterBar';
import RecentViewedBar from './components/RecentViewedBar';
import Footer from './components/Footer';
import Details from './components/Details';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import useAsync from './components/useAsync';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const { data, loading } = useAsync('https://online-shop-424e1-default-rtdb.europe-west1.firebasedatabase.app/Products/.json');

  const [keyword, setKeyword] = useState('');
  const [product, setProduct] = useState('');
  const [maxprice, setMaxprice] = useState(16000);
  const [sorting, setSorting] = useState(1);

  const handleSearch = event => {
    setKeyword(event);
  }

  const handleFiltered = (event) => {
    setProduct(event.target.value);
  }

  const handleMaxprice = (event, value) => {
    setMaxprice(value);
  }

  let newData = data.filter(filtered => filtered.id.includes(product))
    .filter(filtered => maxprice === 0 ? filtered.price > 0 : filtered.price <= maxprice)
    .filter(filtered => {
      return (
        filtered.name.replace(/\s/g, '').toLowerCase().match(keyword.replace(/\s/g, '').toLowerCase()) ||
        filtered.specs.some(el => el.replace(/\s/g, '').toLowerCase().match(keyword.replace(/\s/g, '').toLowerCase())) ||
        filtered.description.replace(/\s/g, '').toLowerCase().match(keyword.replace(/\s/g, '').toLowerCase())
      );
    });

  const handleSort = () => {
    if (sorting === 1) {
      setSorting(2);
    } else if (sorting === 2) {
      setSorting(3);
    } else {
      setSorting(1);
    }
  };

  const tonavbar = {
    keyword,
    handleSearch
  }


  const tofilterbar = {
    product,
    maxprice,
    handleFiltered,
    handleMaxprice,
    handleSort,
    sorting
  }

  const tohome = {
    product,
    maxprice,
    newData,
    loading,
    sorting,
    keyword
  }



  // Hides navbar on scrolling down
  function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

  return (
    <AuthProvider>
      <Router>
        <React.Fragment>
          <CssBaseline />
          <HideOnScroll>
            <AppBar>
              <NavBar {...tonavbar} />
              <FilterBar {...tofilterbar} />
            </AppBar>
          </HideOnScroll>
          <Switch>
            <Route path="/wishlist">
              <Wishlist />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <PrivateRoute path="/account">
              <Account />
            </PrivateRoute>
            <Route path="/details">
              <Details />
            </Route>
            <Route path={["/", "/1"]}>
              <Home {...tohome} />
            </Route>
          </Switch>
          <RecentViewedBar />
          <Footer />
        </React.Fragment>
      </Router >
    </AuthProvider>
  )
}

export default App;
