import React, { Fragment } from "react";
import { AppBar, IconButton, InputBase, Paper, Slide, Toolbar, useScrollTrigger } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Menu, Search } from "@material-ui/icons";

export default withStyles(theme => ({
  root: {
    alignItems: "center",
    display: "flex",
    minHeight: 56 - theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      minHeight: 64 - theme.spacing(1)
    },
    margin: theme.spacing(1),
    marginBottom: 0,
    padding: "0 3px",
  },
  color: {
    backgroundColor: "#fffe"
  },
  icon: {
    padding: 12
  },
  input: {
    flex: 1,
    margin: "0 6px"
  }
}))(props =>
  <Fragment>
    <Slide appear={false} in={!useScrollTrigger()}>
      <AppBar className={props.classes.color} elevation={0}>
        <Paper className={props.classes.root}>
          <IconButton aria-label="目錄" className={props.classes.icon} onClick={() => props.onToggle(true)}>
            <Menu />
          </IconButton>
          <InputBase className={props.classes.input} inputProps={{ "aria-label": "在郵件中搜尋" }} placeholder="在郵件中搜尋" />
          <IconButton aria-label="搜尋" className={props.classes.icon} onClick={() => props.onToggle(true)}>
            <Search />
          </IconButton>
        </Paper>
      </AppBar>
    </Slide>
    <Toolbar />
  </Fragment>
);