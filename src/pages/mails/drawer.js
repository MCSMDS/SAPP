import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import { Box, Divider, List, ListItem, ListItemIcon, ListItemText, SwipeableDrawer, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Delete, Drafts, Help, Inbox, Label, Send, Settings } from "@material-ui/icons";

const onToggle = (props, value) => event => {
  if (event && event.type === "keydown" && (event.key === "Shift" || event.key === "Tab")) return;
  props.onToggle(value);
};

export default withStyles(theme => ({
  list: {
    width: 250,
    maxWidth: '75vw'
  },
  toolbar: theme.mixins.toolbar
}))(props => {
  const history = useHistory();
  return (
    <SwipeableDrawer disableSwipeToOpen={false} onClose={onToggle(props, false)} onOpen={onToggle(props, true)} open={props.open}>
      <div className={props.classes.list} onClick={onToggle(props, false)} onKeyDown={onToggle(props, false)}>
        <Box alignItems="center" className={props.classes.toolbar} display="flex" px={2}>
          <Typography color="secondary" variant="h6" >School APP</Typography>
        </Box>
        <Divider />
        <List>
          {[[<Inbox />, "收件箱"], [<Send />, "寄件箱"], [<Drafts />, "草稿箱"], [<Delete />, "垃圾箱"]].map((item, index) =>
            <ListItem button onClick={() => props.onPageChange(index)}>
              <ListItemIcon>{item[0]}</ListItemIcon>
              <ListItemText primary={item[1]} />
            </ListItem>
          )}
        </List>
        {
          props.label && props.label.length > 0 &&
          <Fragment>
            <Divider />
            <List>
              {props.label.map(item =>
                <ListItem button onClick={() => props.onPageChange(item.id)}>
                  <ListItemIcon>
                    <Label />
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItem>
              )}
            </List>
          </Fragment>
        }
        <Divider />
        <List>
          {[[<Settings />, "設定", () => history.push("setting")], [<Help />, "說明", () => history.push("about")]].map(item =>
            <ListItem button onClick={item[2]}>
              <ListItemIcon>{item[0]}</ListItemIcon>
              <ListItemText primary={item[1]} />
            </ListItem>
          )}
        </List>
      </div>
    </SwipeableDrawer>
  )
});