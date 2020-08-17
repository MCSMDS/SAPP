import React, { Fragment } from "react";
import { AppBar, IconButton, Toolbar, useScrollTrigger } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { ArrowBack, Delete, MoreHoriz } from "@material-ui/icons";

export default withStyles(theme => ({
  color: {
    backgroundColor: "#fffe"
  },
  grow: {
    flexGrow: 1
  }
}))(props =>
  <Fragment>
    <AppBar className={props.classes.color} elevation={useScrollTrigger({ disableHysteresis: true, threshold: 0 }) ? 4 : 0}>
      <Toolbar>
        <IconButton aria-label="返回" edge="start" onClick={props.onBack}>
          <ArrowBack />
        </IconButton>
        <div className={props.classes.grow} />
        <IconButton aria-label="删除" onClick={props.onRemove}>
          <Delete />
        </IconButton>
        <IconButton aria-label="更多" edge="end" onClick={() => props.onToggle()}>
          <MoreHoriz />
        </IconButton>
      </Toolbar>
    </AppBar>
    <Toolbar />
  </Fragment>
);