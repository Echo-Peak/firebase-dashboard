import React from 'react';
let {Component} = React;
import Parser from 'react-markdown';
export default class MarkdownParser extends Component{
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
    let formated = this.props.content && this.props.content.length && this.props.content.replace(/\\n/gm,'\n');

    let content = formated || this.props.content;

    return (
      <div data-component='markdown-parser'>
        <Parser source={content || ''}></Parser>

    </div>)
  }
}
