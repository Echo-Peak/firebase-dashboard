import React from 'react';
let {Component} = React;
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import Toggle from 'material-ui/Toggle';

import IconButton from 'material-ui/IconButton';

import {observer} from 'mobx-react';
import {withRouter} from 'react-router';
import uuid from '../util/uuid';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import TextField from 'material-ui/TextField';
import debounce from '../util/debounce';
import Gear from 'material-ui/svg-icons/action/settings';
import Settings from './settings';
import FontIcon from 'material-ui/FontIcon';
import Delete from 'material-ui/svg-icons/action/delete';

let styles = {
  drawer:{
    overflow:'none',
    width:280
  },
  button:{
    right:0,
    position:'absolute',

  },
  flex:{
    marginTop:20
  },
  show:{
    transform:'translateX(280px)',

  },
  textField:{
    width:'100%',
    boxShadow:'none'
  }

}



@observer
export default class Sidemenu extends Component{
      constructor(props){
        super();
        this.state = {
          open:true,
          settings:false,
          elm:null
        };
        let traverse = props.store.traverse;
        this.query = debounce(traverse.queryInput.bind(traverse) ,800);
      }
      openDatabse(db){
        this.props.store.traverse.setCurrentDB(db);

      }

      prepareDelete(path){
        let {observables , modify} = this.props.store;
        let active = observables.active;

        if(active === '/'){
          path = `/${path}`
        }else{
          path = `${active}/${path}`;
        }

        let confirm = window.confirm(`Are you sure you want to delete '${path}'? `);
        if(confirm){
          modify.deletePath(path);
        }
      }
      render(){
        let {state , props}  = this;
        let global = props.store;
        let {traverse , observables ,util} = global;

        let watching = observables.config.watch ? 'Enabled' : 'Disabled';
        let keyboardSave = observables.config.keyboardSave ? 'Enabled' : 'Disabled';
        let persistToDisk = observables.config.persistToDisk ? 'Enabled' : 'Disabled';
        let showRoot = observables.config.editor.showRoot ? 'Enabled' : 'Disabled';
        let db = observables.nodes.map(e => (
          <div key={uuid()} style={{display:'inline-flex', width:270  ,position:'relative'}}>
            <ListItem className="sd"  innerDivStyle={{width:270}}
              primaryText={<strong>{e}</strong>} onTouchTap={this.openDatabse.bind(this ,e)}/>

            <IconButton touch={true} onTouchTap={f => this.prepareDelete(e)}
              tooltip={`Delete ${e}?`} tooltipPosition='top-left' style={{ position:'absolute' , right:0}} iconStyle={{fill:'#fa6060'}}>
              <Delete></Delete>
            </IconButton>
          </div>
         ));
         //console.log(props.store.active ,'asnd');
        return (<div className='Sidebar'>


          <Drawer open={true}  docked={true} style={{width:300, overflowX:'hidden'}} containerStyle={{width:300, padding:5}}>
              <span style={{fontSize:12}}>{observables.config.databaseURL}</span>
              <Subheader>
                <strong>{observables.config.databaseName}</strong>
              </Subheader>
              <Subheader>{observables.active}</Subheader>
              <div style={{display:'flex'}}>
                <TextField id='clear' hintText="Path" fullWidth={true} style={styles.textField}
                onChange={e => this.query(e.target.value)}/>

              <IconButton tooltip="Settings" onTouchTap={e => this.setState({settings:true, elm:e.currentTarget})}>
                <Gear />
              </IconButton>
              </div>

              <FlatButton style={{width:'100%'}} label="back" onTouchTap={e => traverse.back()}/>
              <List>
                <Subheader>Nodes</Subheader>
                  {db}
              </List>

          </Drawer>
          <Settings
            elm={this.state.elm}
            open={this.state.settings}
             store={global} close={e => this.setState({settings:false})}></Settings>
        </div>)
      }
}
