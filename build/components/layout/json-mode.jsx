import React from 'react';
let {Component} = React;
import {observer} from 'mobx-react';

export default class JSONMode extends Component{
  constructor(props){
    super();
    this.state = {
      elm:null,
      value:''
    };
  }
  componentDidMount(){
    this.setState({elm:this.refs.elm});
  }
  componentWillUnmount(){

  }
  componentWillMount(){

  }
  processKeyboard(e){
    console.log(e.key);
    let target = e.target;
    let insertPoint = target.selectionStart;
    let insertWith  = '    '; //4 spaces;
    let textBefore = target.value.substr(0, insertPoint);
    let textAfter = target.value.substr(insertPoint , target.value.length);

    if(e.key === 'Tab'){
      e.preventDefault();
      target.value = `${textBefore}${insertWith}${textAfter}`;
      target.setSelectionRange(insertPoint+4 ,insertPoint+4)
    }
    if(e.key === 'Enter'){
      e.preventDefault();
      let match = /\,|\"|\d|[a-z]/i;
      if(target.value[insertPoint -1].match(match)){

        target.value = `${textBefore}
        ${textAfter}`;
        target.setSelectionRange(insertPoint+4 ,insertPoint+4)
      }
    }
  }
  componentWillUpdate(props, state){

  //  console.log('SHOULD RENDER')
  }
  render(){
    //temporary solution
    //TODO: properly handle onChange event
    let validator = this.props.validate;
    let isClean  = this.props.clean;
    let cleanJSON = this.props.data;
    let data;
    let shouldShow = this.props.style.display;
    if(typeof cleanJSON === 'object'){
      data = JSON.stringify(cleanJSON , null ,2);
    }else{
      data = this.props.data;
    }
    // dont set the view / parse the view unless changing modes
    // make use of component should update!
    //console.log('got!',cleanJSON)
    //data = cleanJSON || '';
  //  console.log(data);
    return (
       <textarea ref='elm'
         id='json-mode'
         onKeyDown={this.processKeyboard.bind(this)}
         onChange={e => validator(e.target.value)}
         value={data}
         style={{height:'calc(100% - 50px)' , position:'relative', display:shouldShow}}></textarea>)
  }
}
