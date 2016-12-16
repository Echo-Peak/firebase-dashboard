import React from 'react';
let {Component} = React;
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import {observer} from 'mobx-react';
import {List, ListItem} from 'material-ui/List';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import uuid from '../util/uuid';
import Subheader from 'material-ui/Subheader';

@observer
export default class Recovery extends Component{
  constructor(props){
    super();
    this.state = {
      dialog:false
    };
  }
  componentDidMount(){

  }
  componentWillUnmount(){

  }
  componentWillMount(){

  }
  recoverSnapshot(){

  }

  select( value){
    let {util} = this.props.store;
    util.useSnapshot(value);
  }
  render(){
    let global = this.props.store;
    let open = this.props.open;
    let close = this.props.close;
    let elm = this.props.elm;
    let {observables ,util , modify} = global;
    let availableSnapshots = observables.snapshots;
    let selected = observables.selectedSnapshot;
    let filename = selected.replace('.json' ,'');
    let confirm = selected ? 'inline-block' : 'none';
    let databaseName = observables.config.databaseURL.split(/\.|\//g)[2];
    let sortedSnapshots = availableSnapshots.sort((a ,b) =>{
      a = a.replace('.json','');
      b = b.replace('.json' ,'');
      let timeA = Number(a.match(/\d+$/));
      let timeB = Number(b.match(/\d+$/));
      return timeB - timeA
    });

    let time = filename.match(/\d+$/);

    let formatSnapshot = `${databaseName} | ${new Date(Number(time))}`
    const actions = [
     <FlatButton
       label="Cancel"
       primary={true}
       keyboardFocused={true}
       onTouchTap={e => this.setState({dialog:false})}
     />,
     <FlatButton
       label={`are you sure you want to use this snapshot?`}
       secondary={true}
       style={{display:confirm}}
       onTouchTap={e => !util.failsafe() && this.setState({dialog:false})}
     />,
    ];
    return (
      <div>
      <Popover
        open={open}
        anchorEl={elm}
        anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
        onRequestClose={close}>
        <Menu>
          <MenuItem onTouchTap={e => !close() && modify.resetPath()}
            primaryText={`Revert '${observables.active}' to earliest version from this session`}/>
          <MenuItem primaryText="Recover from Snapshot" onTouchTap={e => !close() && this.setState({dialog:true})}/>

        </Menu>
      </Popover>
      <Dialog
          title="Restore to Snapshot"
          actions={actions}
          modal={false}
          open={this.state.dialog}
          onRequestClose={e => this.setState({dialog:false})}>
          <span>Arranged from newest to oldest</span>
          {time && databaseName && <Subheader>Snapshot: {formatSnapshot}</Subheader>}
          <List>
            {sortedSnapshots.map(e =>(
              <ListItem key={uuid()} primaryText={e.replace(/\-\d+\.json$/ ,'')} onTouchTap={this.select.bind(this ,e)}></ListItem>
            ))}
          </List>
        </Dialog>
      </div>
    )
  }
}
