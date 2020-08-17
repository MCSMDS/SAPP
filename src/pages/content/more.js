import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const onToggle = (props, value) => event => {
  if (event && event.type === "keydown" && (event.key === "Shift" || event.key === "Tab")) return;
  props.onToggle(value);
};

export default withStyles(theme => ({
  list: {
    width: "auto"
  }
}))(props =>
  <React.Fragment>
    <Drawer anchor="bottom" onClose={onToggle(props, false)} open={props.open} >
      <div className={props.classes.list} onClick={onToggle(props, false)} onKeyDown={onToggle(props, false)}>
        <List>
          {[["移至", props.onMove], ['列印', () => window.print()], ['取消']].map(item =>
            <ListItem button onClick={item[1]}>
              <ListItemText primary={item[0]} />
            </ListItem>
          )}
        </List>
      </div>
    </Drawer>
  </React.Fragment>
);