import React from "react";
import { Fab } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { Create } from "@material-ui/icons";

export default withStyles(theme => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing(3),
    right: theme.spacing(3),
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.secondary.contrastText,
    '&:hover': {
      backgroundColor: fade(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
      '@media (hover: none)': {
        backgroundColor: theme.palette.secondary.contrastText
      }
    }
  },
  no: {
    height: 56 + theme.spacing(6) - theme.spacing(2)
  }
}))(props =>
  <React.Fragment>
    <Fab aria-label="撰寫" className={props.classes.fab}>
      <Create />
    </Fab>
    <div className={props.classes.no} />
  </React.Fragment>
);