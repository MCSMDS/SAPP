import React from "react";
import connect from '../../react-redux/connect';
import { useHistory } from "react-router-dom";
import { Avatar, Button, Container, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { LockOutlined } from "@material-ui/icons";
import sapi from "../../sapi";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(9),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    marginTop: theme.spacing(1)
  },
  submit: {
    marginTop: theme.spacing(2)
  }
}));

const onClick = props => event => {
  event.preventDefault();
  props(document.querySelector("#username").value, document.querySelector("#password").value);
};

export default connect(props => {
  const history = useHistory();
  const classes = useStyles();

  const login = async (username, password) => {
    const cookie = await sapi.login(username, password);
    if (!cookie) return;
    history.replace('mails');
    sapi.mail().then(data => props.setStorage('mails', data));
    sapi.label().then(item => props.setStorage('label', item));
  };

  return (
    <Container className={classes.root} maxWidth="xs">
      <Avatar className={classes.avatar}>
        <LockOutlined />
      </Avatar>
      <Typography variant="h5">登入</Typography>
      <form className={classes.form}>
        <TextField autoComplete="username" fullWidth id="username" label="登入編號" margin="normal" variant="outlined" />
        <TextField autoComplete="current-password" fullWidth id="password" label="密碼" margin="normal" type="password" variant="outlined" />
        <Button className={classes.submit} color="primary" fullWidth onClick={onClick(login)} variant="outlined">登入</Button>
      </form>
    </Container>
  )
});