import React from "react";
import connect from '../../react-redux/connect';
import { useHistory } from "react-router-dom";
import { Button, Typography, AppBar, Toolbar, IconButton, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ArrowBack } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: "#fffe"
  },
  title: {
    marginLeft: theme.spacing(2),
  },
  submit: {
    marginTop: theme.spacing(2)
  }
}));

export default connect(props => {
  const history = useHistory();
  const classes = useStyles();

  const onClick = event => {
    event.preventDefault();
    props.setStorage('username', null);
    props.setStorage('password', null);
    props.setStorage('cookie', null);
    props.setStorage('contentid', null);
    props.setStorage('pagesid', 0);

    props.setStorage("content", null);
    props.setStorage("label", null);
    props.setStorage("mails", null);

    props.setStorage("open1", false);
    props.setStorage("open2", false);
    props.setStorage("drawer", false);
  };

  return (
    <React.Fragment>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" onClick={() => history.goBack()} aria-label="close">
            <ArrowBack />
          </IconButton>
          <Typography variant="h6" className={classes.title} color="textPrimary">設定</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container maxWidth="md">
        <Button className={classes.submit} variant="contained" onClick={onClick} >删除所有數據</Button>
      </Container>
    </React.Fragment>
  )
});