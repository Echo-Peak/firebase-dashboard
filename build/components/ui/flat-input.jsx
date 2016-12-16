import React from 'react';
let {Component} = React;
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

let styles = {
  input:{
    opacity:0,
    width:'100%',
    height:'100%',
    position:'absolute',
    zIndex:2,
    cursor:'pointer'
  }
}
export default class FlatInput extends Component{
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
  streamData(onchange , ev){
    let fileArray = Array.apply(0,ev.target.files);

    let self = this;
    let count = 0;
    let files = [];
    fileArray.forEach(function(fileData ,index ,arr){
      let reader = new FileReader();
        reader.onload = function(res){
            count += 1;
            let data = res.target.result;
            files.push({name:fileData.name ,data});
            if(count === arr.length){
              onchange(files);
            }
          }
    reader.readAsBinaryString(fileData);


    });

    console.log("streaming");

  }
  render(){

    let stream = this.props.stream ? this.streamData.bind(this, this.props.onChange) : this.props.onChange;
    let multiple = this.props.multiple ? true : false
    let input  = (
      <input accept={this.props.accept}
        multiple={multiple}
        style={styles.input}
        type='file'
        onChange={stream}
        />);

      if(this.props.raised){
          return (<RaisedButton secondary={this.props.secondary} primary={this.props.primary} label={this.props.label} children={input} style={{cursor:'pointer'}}/>)
      }else{
          return (<FlatButton secondary={this.props.secondary} primary={this.props.primary} label={this.props.label} children={input}
            labelStyle={{textTransform:'none' , fontSize:16}}
             style={{ height:48, cursor:'pointer', width:'100%' ,textAlign:'left'}}/>)
      }

  }
}
