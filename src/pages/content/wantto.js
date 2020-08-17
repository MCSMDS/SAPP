import React from "react";
import { Grid, Button } from "@material-ui/core";
import { Reply, ReplyAll, Forward } from '@material-ui/icons';
import { withStyles } from "@material-ui/core/styles";

export default withStyles(theme => ({
  root: {
    marginTop: "auto",
    marginBottom: theme.spacing(2)
  }
}))(props =>
  <div className={props.classes.root} >
    <Grid container spacing={1}>
      <Grid item xs={4}>
        <Button fullWidth startIcon={<Reply />} variant="outlined">回覆</Button>
      </Grid>
      <Grid item xs={4}>
        <Button fullWidth startIcon={<ReplyAll />} variant="outlined">回覆全部</Button>
      </Grid>
      <Grid item xs={4}>
        <Button fullWidth startIcon={<Forward />} variant="outlined">轉寄</Button>
      </Grid>
    </Grid>
  </div>
);