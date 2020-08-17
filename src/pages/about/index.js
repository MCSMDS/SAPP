import React from "react";
import { useHistory } from "react-router-dom";
import { Typography, AppBar, Toolbar, IconButton, Container } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { ArrowBack } from "@material-ui/icons";

export default withStyles(theme => ({
  appBar: {
    backgroundColor: "#fffe"
  },
  title: {
    marginLeft: theme.spacing(2),
  }
}))(props => {
  const history = useHistory();
  return (
    <React.Fragment>
      <AppBar className={props.classes.appBar}>
        <Toolbar>
          <IconButton edge="start" onClick={() => history.goBack()} aria-label="close">
            <ArrowBack />
          </IconButton>
          <Typography variant="h6" className={props.classes.title} color="textPrimary">說明</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container maxWidth="md">
        <Typography variant="h5" className={props.classes.title} color="textPrimary">我不知道該在這裡寫什麼！</Typography>
      </Container>
    </React.Fragment>
  )
});