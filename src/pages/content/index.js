import React from "react";
import connect from '../../react-redux/connect';
import { Route, useHistory } from "react-router-dom";
import { Container, Typography, CircularProgress, Box } from "@material-ui/core";
import Myfile from "./file";
import Myinfo from "./info";
import Mymodel from "./model";
import Mymore from "./more";
import Mymove from "./move";
import Mywantto from "./wantto";
import { makeStyles } from "@material-ui/core/styles";
import sapi from "../../sapi";

const wait = (time) => new Promise((fn) => setTimeout(() => fn(), time));

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: 'calc(100% - 56px)',
    [theme.breakpoints.up("sm")]: {
      minHeight: 'calc(100% - 64px)',
    }
  }
}));

export default connect(props => {
  const { root } = useStyles();

  const history = useHistory();

  const onBack = async () => {
    history.goBack();
    await wait(275);
    props.setStorage('content', null);
    props.setStorage('open1', false);
    props.setStorage('open2', false);
  }

  const onppen1 = async (value = true) => {
    if (value) {
      history.push("content/more");
    } else {
      history.goBack();
    }
    props.setStorage('open1', value);
  }

  const onppen2 = async value => {
    await wait(275);
    if (value) {
      history.push("content/move");
    } else {
      history.goBack();
    }
    props.setStorage('open2', value);
  }

  const moveto = id => {
    sapi.moveto(props.getStorage('contentid'), props.getStorage('pagesid'), id).then(() => console.log('ok'));
  };

  return (
    <div style={{ height: "100%" }}>
      <Mymodel onBack={onBack} onToggle={onppen1} onRemove={() => { sapi.remove(props.getStorage('contentid')); alert("移除到回收箱") }} />
      <Route path="/content/more">
        <Mymore onMove={() => onppen2(true)} onToggle={onppen1} open={props.getStorage('open1')} />
      </Route>
      <Route path="/content/move">
        <Mymove label={props.getStorage("label")} moveto={moveto} open1={props.getStorage('open2')} handleClose={() => onppen2(false)} />
      </Route>
      {
        props.getStorage('content') ?
          <Container maxWidth="md" className={root}>
            <Typography variant="h5">{props.getStorage('content').title}</Typography>
            <Myinfo content={props.getStorage('content')} />
            <Myfile files={props.getStorage('content').files} onClick={item => sapi.dawnload(item)} />
            <div dangerouslySetInnerHTML={{ __html: props.getStorage('content').content }} style={{ marginBottom: 8 }} />
            <Mywantto />
          </Container>
          :
          <Box display="flex" justifyContent="center" alignItems="center" style={{ height: 'calc(100% - 64px)' }}>
            <CircularProgress />
          </Box>
      }
    </div>
  )
});