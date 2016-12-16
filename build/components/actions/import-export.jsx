import React from 'react';
let {Component} = React;
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FlatInput from '../ui/flat-input';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';


export default class Modes extends Component{
  constructor(props){
    super();
    this.state = {
      dialog:false,
      input:''
    };
  }
  componentDidMount(){

  }
  componentWillUnmount(){

  }
  componentWillMount(){

  }
  validateFile(e){
    //let global = this.props.store;
    let {util}  = this.props.store;

    let messages = this.props.messages;
    let file = e.target.files[0];
    let reader = new FileReader();
    let isJson = /\.json$/.test(file.name);
    let isEmpty = file.size < 1;

    if(isJson && !isEmpty){
      reader.onload = function(res){
        let data = res.target.result;
        try{
          data = JSON.parse(data);
          util.importFromLocal(data);
        }catch(err){
          messages.say(`Error parsing '${file.name}'`);
        }
        console.log(data);
      }
      reader.readAsText(file);
    }else{
      messages.say(`'${file.name}' is either not json or is empty`);
    }

  }
  exportToFile(){
    let {observables} = this.props.store;
    let currentView = observables.currentView;
    let path = observables.active;
    let filename = path.replace(/\//g,'-');
    window.firebase_dashboard.sockets.db.emit('export-path' ,{path , data:currentView});

  }
  createSnapshot(){
    window.firebase_dashboard.sockets.db.emit('create-snapshot');
  }
  render(){
    let global = this.props.store;
    let {observables, util} = global;
    let open = this.props.open;
    let close = this.props.close;
    let elm = this.props.elm;
    let secondaryText = observables.active;
    if(secondaryText === '/'){
      secondaryText = 'ROOT';
    }
    if(secondaryText.length > 20){
      secondaryText = secondaryText.substr(0,20);
      secondaryText += '...';
    }
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={e => this.setState({dialog:false})}
      />,
      <FlatButton
        label="import"
        primary={true}
        onTouchTap={e => !util.importFromURL(this.state.input) && this.setState({dialog:false})}
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

        <List>
          <ListItem primaryText="Import from URL" onTouchTap={e => this.setState({dialog:true})}/>
          <FlatInput label='Import from File-System' accept='*.json' onChange={this.validateFile.bind(this)}></FlatInput>
          <Divider />
          <ListItem primaryText="Export Current path" secondaryText={secondaryText}
            onTouchTap={e => !close() && this.exportToFile()}/>

          <ListItem primaryText="Create database snapshot" onTouchTap={e => !close() && this.createSnapshot()}/>
        </List>



      </Popover>

      <Dialog
          ref='dialog'

          title="Import JSON from URL"
          actions={actions}
          modal={false}
          open={this.state.dialog}
          onTouchTap={e => this.setState({dialog:false})} >

          <TextField id='clear'
            fullWidth={true}
            onChange={e => this.setState({input:e.target.value})}
            hintText="Enter url to import json from"
            floatingLabelText="URL"/>
        </Dialog>
      </div>
    )
  }
}
