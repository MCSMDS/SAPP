import React from "react";
import { Link, Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

export default withStyles(theme => ({
  root: {
    margin: theme.spacing(1, 0),
    padding: theme.spacing(2)
  }
}))(props =>
  props.files.length > 0 &&
  <Paper className={props.classes.root} variant="outlined">
    {props.files.map((item) =>
      <React.Fragment>
        <Link onClick={() => props.onClick(item)}>{item}</Link>
        <br />
      </React.Fragment>
    )}
  </Paper>
);