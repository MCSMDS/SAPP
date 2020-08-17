import React from "react";
import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

export default withStyles(theme => ({
  root: {
    padding: theme.spacing(1, 0)
  }
}))(props =>
  <ListItem className={props.classes.root} elementType="div">
    <ListItemAvatar>
      <Avatar>{props.content.sender[0]}</Avatar>
    </ListItemAvatar>
    <ListItemText primary={props.content.sender} secondary={props.content.time} />
  </ListItem>
);