import React from "react";
import connect from '../../react-redux/connect';
import { useHistory } from "react-router-dom";
import { CircularProgress, Box } from "@material-ui/core";
import Myappbar from "./appbar";
import Mydrawer from "./drawer";
import Myfab from "./Myfab";
import Mylist from "./list";
import sapi from "../../sapi";

const wait = (time) => new Promise((fn) => setTimeout(() => fn(), time));

export default connect(props => {
  const history = useHistory();

  const onPageChange = id => {
    props.setStorage('mails', null);
    sapi.mail(id).then(data => props.setStorage('mails', data));
    props.setStorage('pagesid', id);
  };

  const showContent = async id => {
    if (id === undefined) return;
    props.setStorage("contentid", id)
    sapi.content(id).then(content => props.setStorage('content', content));
    await wait(275);
    history.push('content');
  };

  return (
    <div style={{ height: "100%" }}>
      <Myappbar onToggle={value => props.setStorage('drawer', value)} />
      <Mydrawer label={props.getStorage("label")} onPageChange={onPageChange} onToggle={value => props.setStorage('drawer', value)} open={props.getStorage('drawer')} />
      {
        props.getStorage("mails") ?
          <Mylist items={props.getStorage("mails")} onEachClick={showContent} />
          :
          <Box display="flex" justifyContent="center" alignItems="center" style={{ height: 'calc(100% - 64px - 88px)' }}>
            <CircularProgress />
          </Box>
      }
      <Myfab />
    </div>
  )
});