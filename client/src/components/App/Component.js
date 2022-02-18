import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Router, Route, Switch } from 'react-router-dom';
import theme from '../../theme';
import history from '../../util/history';
import GlobalStyle from '../../globalStyle';
import HeaderContainer from '../Header/Container';
import ErrorNotificationContainer from '../ErrorNotification/Container';
import LoginFormContainer from '../LoginForm/Container';
import SignupFormContainer from '../SignupForm/Container';
import CreatePostFormContainer from '../CreatePostForm/Container';
import Home from '../Home';
import { useEffect,useState } from "react";
import Posts from '../Admin/Posts'
//import { withRouter } from "react-router-dom";
//import ScrollToTop from "./ScrollToTop";
import {FaArrowCircleUp} from 'react-icons/fa';
import store from '../../store';
import '../../style.css';

const ScrollArrow = () =>{

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
        <FaArrowCircleUp className="scrollTop" onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}}/>
  );
}

const App = props => {
  
  const [stores, setStore] = useState(null);

  useEffect(() => {
    let s = store.getState()
    console.log(s)
    setStore(s)
    console.log(stores, s,"sf")
  }, []);
  return(
  
  <ThemeProvider theme={theme(props.dark)}>
    <Router history={history}>
      <>
      
        <GlobalStyle />
        <Route component={HeaderContainer} />
        <Route component={ErrorNotificationContainer} />
        <ScrollArrow/>
        <Switch>
          <Route path='/login' component={LoginFormContainer} />
          <Route path='/signup' component={SignupFormContainer} />
          <Route path='/createpost' component={CreatePostFormContainer} />
          <Route path='/admin' component={Posts} />
          <Route path='/' component={Home} />
        </Switch>
      </>
      
    </Router>
  </ThemeProvider>
)};

export default App;
