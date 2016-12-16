import React from 'react';
let {Component} = React;
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import {observer} from 'mobx-react';
import Snackbar from 'material-ui/Snackbar';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import FlatButton from 'material-ui/FlatButton';
import {regex} from '../util/regex';

export default class NewItem extends Component{
  constructor(props){
    super();
    this.state = {
      newPath:false,
      currentVal:'',
      err:''
    };
  }
  componentDidMount(){

  }
  componentWillUnmount(){

  }
  componentWillMount(){

  }
  processPath(e){
    let {modify} = this.props.store;
    if(!e){
      this.setState({newPath:false , currentVal:''});
      return
    }
    console.log(e.type);

    if(e.type === 'change'){

      this.state.currentVal = e.target.value;
      //this.setState({currentVal:e.target.value});
    }else if(e.type === 'mouseup'){
      this.state.currentVal.length && modify.createNewPath(this.state.currentVal);
      this.setState({newPath:false , currentVal:''});
    }
    //let value = e.
  }
  render(){
    let global = this.props.store;
    let open = this.props.open;
    let close = this.props.close;
    let elm = this.props.elm;
    let {modify} = global;

    let enterPath = (<span>
<TextField id="clear" onChange={this.processPath.bind(this)}
    underlineStyle={{ color:'#ff5f95'}} hintStyle={{color:'#f23d7a'}}
    inputStyle={{color:'#ff5f95'}}
    hintText="Enter new pathname to create"
    errorText={this.state.err}
    />
  <FlatButton label="Cancel" secondary={true} onTouchTap={e => this.processPath.call(this)}/>
    </span>)


    return (
      <div>
      <Popover
        open={open}
        anchorEl={elm}
        anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
        onRequestClose={close}>
        <Menu>
          <MenuItem primaryText="Path" onTouchTap={e => !close() && this.setState({newPath:true})}/>
          <MenuItem primaryText="Array" onTouchTap={e => !modify.newItem('array') && close()}/>
          <MenuItem primaryText="Object" onTouchTap={e => !modify.newItem('object') && close()}/>
          <MenuItem primaryText="String" onTouchTap={e => !modify.newItem('string') && close()}/>
          <MenuItem primaryText="Number" onTouchTap={e => !modify.newItem('number') && close()}/>
        </Menu>
      </Popover>
      <Snackbar

          open={this.state.newPath}
          message={enterPath}
          action='Create'
          onActionTouchTap={this.processPath.bind(this)}
          autoHideDuration={60000}
          onRequestClose={e => !this.processPath.call(this) && this.setState({newPath:false})}
        />
    </div>
    )
  }
}
