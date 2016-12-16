import React from 'react';
let {Component} = React;
import {observer} from 'mobx-react';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';

export default class Settings extends Component{
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
    let {traverse , observables ,util} = this.props.store;

    let watching = observables.config.watch ? 'Enabled' : 'Disabled';
    let keyboardSave = observables.config.keyboardSave ? 'Enabled' : 'Disabled';
    let persistToDisk = observables.config.persistToDisk ? 'Enabled' : 'Disabled';
    let showRoot = observables.config.editor.showRoot ? 'Enabled' : 'Disabled';
    let cacheChecking = observables.config.cacheChecking ? 'Enabled' : 'Disabled';
    let close = this.props.close;

    return (<div>
      <Popover
      open={this.props.open}
      anchorEl={this.props.elm}
      anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
      onRequestClose={close}>
      <div style={{padding:10 ,width:250}}>

        <Toggle onToggle={(e ,bool) => util.toggleCacheChecking(bool)}
            label={`Toggle caching?`} defaultToggled={observables.config.cacheChecking} />

      <Toggle onToggle={(e ,bool) => util.setupRoot(bool)}
          label={`Show Root?`} defaultToggled={observables.config.editor.showRoot} />

        <Toggle onToggle={(e ,bool) => util.setupWatch(bool)}
          label={`Watch for changes?`} defaultToggled={observables.config.watch} />

        <Toggle onToggle={(e ,bool) => util.setProp('config/keyboardSave' ,bool)}
          label={`Ctrl + S to save?`} defaultToggled={observables.config.keyboardSave} />

        <Toggle onToggle={(e ,bool) => util.togglePersistToDisk(bool)}
            label={`Save to disk on change?`} defaultToggled={observables.config.persistToDisk} />
      </div>

    </Popover>
    </div>)
  }
}
