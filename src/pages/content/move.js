import React from "react";
import { List, ListItem, ListItemText, Divider, ListItemIcon, Typography, Dialog, AppBar, Toolbar, IconButton, Slide } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Label, Inbox, Send, Close } from "@material-ui/icons";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default withStyles(theme => ({
  appBar: {
    position: 'relative',
    backgroundColor: "#fffe"
  },
  title: {
    marginLeft: theme.spacing(2),
  }
}))(props =>
  <React.Fragment>
    <Dialog fullScreen open={props.open1} onClose={props.handleClose} TransitionComponent={Transition}>
      <AppBar className={props.classes.appBar}>
        <Toolbar>
          <IconButton edge="start" onClick={props.handleClose} aria-label="close">
            <Close />
          </IconButton>
          <Typography variant="h6" className={props.classes.title} color="textPrimary">移至</Typography>
        </Toolbar>
      </AppBar>

      <List>
        <ListItem button onClick={() => props.moveto(2)}>
          <ListItemIcon>
            <Inbox />
          </ListItemIcon>
          <ListItemText primary="收件箱" />
        </ListItem>
        <ListItem button onClick={() => props.moveto(0)}>
          <ListItemIcon>
            <Send />
          </ListItemIcon>
          <ListItemText primary="寄件箱" />
        </ListItem>
      </List>

      {
        props.label.length > 0 &&
        <React.Fragment>
          <Divider />
          <List>
            {props.label.map(item =>
              <ListItem button onClick={() => props.moveto(item.id)}>
                <ListItemIcon>
                  <Label />
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItem>
            )}
          </List>
        </React.Fragment>
      }

    </Dialog>
  </React.Fragment>
);