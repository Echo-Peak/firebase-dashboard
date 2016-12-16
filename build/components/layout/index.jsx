import React from 'react';
import ReactDOM from 'react-dom';
let {Component} = React;
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Sidebar from '../side-menu';
import {observer ,inject} from 'mobx-react';

import uuid from '../util/uuid';
import {Link} from 'react-router';
import ActionHome from 'material-ui/svg-icons/action/home';
import Dialog from 'material-ui/Dialog';
import { RouteTransition } from 'react-router-transition';
import Cloud from 'material-ui/svg-icons/file/cloud';
import BottomActions from '../actions';
import UIMessage from './ui-message';
import ViewOutput from './view-output';
import UIDialog from './ui-dialog';

let styles = {
  x:[100 ,-100]
}




@observer
class layout extends Component{
      static init(){
        //console.log('that')
      }
      constructor(props){
        super();

        this.state = {
          sidemenu:false,
          toast:{
            open:false
          }
        };

      }
      componentDidMount(){
        let {observables , util ,validate} = this.props.stores.global;
        window.applicationReady = true;
        let elm = this.refs.output.refs.elm;

        JSONEditor.defaults.theme = 'foundation5';
        JSONEditor.defaults.iconlib = 'fontawesome4';

      //  console.log(elm , this.refs.output.refs.elm);
        let opts = {
          schema:{
            format:'row'
          }
        }
        this.editor = new JSONEditor(elm , opts);
        this.editor.on('change' ,()=>{
          let checkErrors = this.editor.validate();
          validate.checkEditor(checkErrors);

        });

        util.setEditor(this.editor);
      }
      componentWillMount(){

      }
      render(){
      let {state} = this;
       let props = this.props;
      let messages = this.props.stores.messages;
       let store = this.props.stores.global;

        return (
          <div className='layout-main'>
             <div className='menu-container'>
               <Sidebar store={store}></Sidebar>
             </div>
             <div className={`view`} style={{marginLeft:300 ,width:'calc(100% - 300px)'}}>
                 <div className='child-view' >

                   <ViewOutput store={store} message={messages} ref='output'></ViewOutput>
                    <BottomActions store={store} messages={messages}></BottomActions>
                 </div>
               </div>

               <UIMessage store={messages}></UIMessage>
               <UIDialog store={store}></UIDialog>

          </div>
        )

    }
}
export default !layout.init() && layout;
