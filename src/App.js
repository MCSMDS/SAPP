import React, { Fragment, useEffect } from "react";
import { connect } from './react-redux';
import { Route, useHistory } from "react-router-dom";
import { Login, Mails, Content, Setting, About } from "./pages";
import sapi from "./sapi";

export default connect(
  state => ({ getStorage: key => state[key] }),
  dispatch => ({ setStorage: (key, value) => dispatch({ type: key, value }) })
)(props => {
  window.getStorage = props.getStorage;
  window.setStorage = props.setStorage;

  const history = useHistory();

  useEffect(() => {
    if (window.getStorage("username") && window.getStorage("password")) {
      history.replace('mails');
      window.setStorage("open1", false);
      window.setStorage("open2", false);
      window.setStorage("drawer", false);
      sapi.mail(window.getStorage("pagesid")).then(data => window.setStorage("mails", data));
      sapi.label().then(item => window.setStorage("label", item));
    } else {
      history.replace('');
    }
  }, [history]);

  return (
    <Fragment>
      <Route exact path="/" component={Login} />
      <Route exact path="/mails" component={Mails} />
      <Route path="/content" component={Content} />
      <Route path="/setting" component={Setting} />
      <Route path="/about" component={About} />
    </Fragment>
  )
})