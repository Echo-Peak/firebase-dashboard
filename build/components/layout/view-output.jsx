import React from 'react';
let {Component} = React;
import {observer} from 'mobx-react';
import JSONMode from './json-mode';
import debounce from '../util/debounce';


@observer
export default class ViewOutput extends Component{
  constructor(props){
    super();
    this.state = {};
    let validate = props.store.validate;
    this.checkJSON = debounce(validate.check.bind(validate) ,400);
  }
  componentDidMount(){

  }
  componentWillUnmount(){

  }
  componentWillMount(){

  }

  render(){
    let global = this.props.store;
    let {observables , validate} = global;
    let active = observables.active;
    let root = active === '/';
    let showRoot = observables.config.editor.showRoot;
    let mode = observables.config.mode;
    let rootSnapshot = observables.rootSnapshot;
    let showRootSnapshot = root && showRoot && observables.currentView === null;

    //let interactiveMode = mode === 'interactive' ? 'block' : 'none';
    let interactiveMode = (root && showRoot && mode === 'interactive') || !root && mode === 'interactive' ? 'block' : 'none';
    let jsonMode = (showRootSnapshot || (showRoot && observables.currentView && root) &&  mode === 'json') ||
     !root && mode === 'json' && observables.currentView ? 'block' : 'none';
    let view;
    let clean;

    try{
      view = JSON.parse(observables.currentView);
      clean = true;
    }catch(err){
      view = observables.currentView;
      clean = false;
    }
    if(showRootSnapshot){
      view = rootSnapshot;
    }



    return (<div>
      <div style={{display:interactiveMode }} ref='elm'></div>
      {root && !showRoot && <span style={{padding:10}}>
      Cant show rooot. Enable 'show root' in the config.json or toggle root from the settings icon.
    </span>}
      <JSONMode data={view} validate={ value => validate.check(value)} clean={clean} style={{display:jsonMode}}></JSONMode>
    </div>)
  }
}
