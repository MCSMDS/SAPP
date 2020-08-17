import React from "react";
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

export default withStyles({
  truncate: {
    "& *": {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }
})(props =>
  props.items && props.items.length > 0 &&
  <List>
    {props.items.map(item =>
      <ListItem button onClick={() => props.onEachClick(item.id)}>
        <ListItemAvatar>
          <Avatar>{item.title[0]}</Avatar>
        </ListItemAvatar>
        <ListItemText className={props.classes.truncate} primary={item.title} secondary={item.subtitle} />
      </ListItem>
    )}
  </List>
);