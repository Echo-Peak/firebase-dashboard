import React from 'react';
let {Component} = React;
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import {observer} from 'mobx-react';
import {Motion , spring} from 'react-motion';
import uuid from '../util/uuid';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import AddBox from 'material-ui/svg-icons/content/add-box';
import DeleteSweep from 'material-ui/svg-icons/content/delete-sweep';
import Undo from 'material-ui/svg-icons/content/undo';
import Add from 'material-ui/svg-icons/content/add';
import Save from 'material-ui/svg-icons/content/save';
import ViewCarousel from 'material-ui/svg-icons/action/view-carousel';
import Cloud from 'material-ui/svg-icons/file/cloud';
import Warning from 'material-ui/svg-icons/alert/warning';
import Done from 'material-ui/svg-icons/action/done';
import History from 'material-ui/svg-icons/action/history';

import NewMenu from './new';
import ModeMenu from './modes';
import ImportExport from './import-export';
import Recovery from './recovery';

let styles = {
  bar:{
    width:'calc(100% - 280px)',
    position:'fixed',
    bottom:0,
    zIndex:2,
    boxShadow:'0px 0px 5px rgba(0,0,0,0.2)'
  },
  update:{
    background:'#4fd566',
    position:'absolute',
    right:0
  },
  validJSON:{
    position:'absolute',
    left:0,
    background:'#4fd566'
  },
  invalidJSON:{
    position:'absolute',
    left:0,
    color:'white',
    background:'rgb(203, 49, 49)'
  }

}

@observer
export default class Navigation extends Component{
  constructor(props){
    super();
    this.state = {
      show_new:false,
      show_modes:false,
      show_import:false,
      show_recovery:false,
      elm_new:null,
      elm_modes:null,
      elm_import:null,
      elm_recovery:null,
      selectedIndex:0
    };
  }
  componentDidMount(){

  }
  componentWillUnmount(){

  }
  componentWillMount(){

  }
  createNew(){

  }
  render(){
    let global = this.props.store;
    let {observables ,modify} = global;
     let messages = this.props.messages;
     let view = observables.currentView;
     let isJSONValid = observables.validJSON;
     let jsonMode = observables.config.mode === 'json';
     let updated = observables.show_update ? 'block' :'none';
     let modified = observables.show_modified ? 'block' : 'none';
     let checking = observables.checking;
     let notNull = observables.validJSON !== null;
     let syncing = observables.syncing ? 'block' : 'none';

    let vaildJSON = notNull && isJSONValid  && view && jsonMode ? 'block' : 'none';
    let invaildJSON =  !isJSONValid && notNull  && view  && jsonMode ? 'block' : 'none'
    //console.log('json',isJSONValid);
    return (
      <div>
         <BottomNavigation style={styles.bar}>

           <BottomNavigationItem
             style={{...styles.validJSON, display:vaildJSON}}
             label={<span style={{color:'white'}}>Valid JSON</span>}
             icon={<Done style={{fill:'white'}}></Done>} />

          <BottomNavigationItem
            style={{...styles.invalidJSON, display:invaildJSON}}
            label={<span style={{color:'white'}}>Invalid JSON</span>}
            icon={<Warning style={{fill:'white'}}></Warning>} />
           <BottomNavigationItem
             label="New"
             icon={<Add></Add>}
             onTouchTap={e => this.setState({show_new:true , elm_new:e.currentTarget})}  />

         <BottomNavigationItem label="update" icon={<Save></Save>}
              onTouchTap={() => modify.sync()} />

            <BottomNavigationItem label="Undo" icon={<Undo></Undo>} onTouchTap={e => modify.undo()}  />

              <BottomNavigationItem label="Mode" icon={<ViewCarousel></ViewCarousel>}
              onTouchTap={e => this.setState({show_modes:true, elm_modes:e.currentTarget})}   />

            <BottomNavigationItem label="Export / Import" icon={<Cloud></Cloud>}
              onTouchTap={e => this.setState({show_import:true, elm_import:e.currentTarget})}   />

            <BottomNavigationItem label="Recovery" icon={<History></History>}
              onTouchTap={e => this.setState({show_recovery:true, elm_recovery:e.currentTarget})}   />

            <BottomNavigationItem style={{...styles.update, display:syncing}} label="Syncing" icon={<Warning></Warning>} />

         </BottomNavigation>

        <NewMenu
          open={this.state.show_new}  store={global} elm={this.state.elm_new}
          close={e => this.setState({show_new:false})}></NewMenu>
        <ModeMenu open={this.state.show_modes}  store={global} elm={this.state.elm_modes}
        close={e => this.setState({show_modes:false})}></ModeMenu>

      <ImportExport open={this.state.show_import}  store={global} elm={this.state.elm_import} messages={messages}
        close={e => this.setState({show_import:false})}></ImportExport>

      <Recovery open={this.state.show_recovery}  store={global} elm={this.state.elm_recovery} messages={messages}
          close={e => this.setState({show_recovery:false})}></Recovery>
</div>
    )
  }

}
