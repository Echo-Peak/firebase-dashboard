import React from 'react';
let {Component} = React;
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
export default class Modes extends Component{
  constructor(props){
    super();
    this.state = {};
  }
  componentDidMount(){

  }
  componentWillUnmount(){

  }
  componentWillMount(){

  }

  render(){
    let global = this.props.store;
    let {observables , util} = global;
    let open = this.props.open;
    let close = this.props.close;
    let elm = this.props.elm;
    return (

      <Popover
        open={open}
        anchorEl={elm}
        anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
        onRequestClose={close}>
        <Menu>
          <MenuItem primaryText="JSON" onTouchTap={e => !close() && util.switchMode('json')}/>
          <MenuItem primaryText="Interactive" onTouchTap={e => !close() && util.switchMode('interactive')}/>
        </Menu>
      </Popover>
    )
  }
}
