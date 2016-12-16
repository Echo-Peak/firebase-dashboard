import React from 'react';
let {Component} = React;
import Snackbar from 'material-ui/Snackbar';
import {observer} from 'mobx-react';
import uuid from '../util/uuid';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';


let styles = {
  container:{
    display:'flex',
    flexDirection:'row',

  },
  msg:{
    flex:2,
    paddingLeft:10
  //  order:1
  },
  button:{
    //flex:'auto',
    color:'rgb(255, 64, 129)',
    height:'calc(100% - 10px)',
    margin:5
  }
}
@observer
export default class UIMessage extends Component{

  render(){
    let store = this.props.store;
    let actions = store.actions.map(e => (
      //e.callback is a observable
      <FlatButton style={{...styles.button, minWidth:10}}
        key={uuid()} label={e.label} onTouchTap={f => e.callback}></FlatButton>
    ));

    let body = (<div style={styles.container}>
      <div style={styles.msg}>{store.message}</div>
      {actions}
    </div>);
    return (<Snackbar
      open={store.open}
      bodyStyle={{padding:0 , maxWidth:900}}
      message={body}
      autoHideDuration={store.timeout}
      onRequestClose={e => store.setToggle(false)}
    />)
  }
}
