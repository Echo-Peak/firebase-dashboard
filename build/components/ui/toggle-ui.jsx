import React from 'react';
let {Component} = React;
export default class ToggleUI extends Component{
  constructor(props){
    super();
    this.state = {
      show:true
    };
  }
  componentDidMount(){
    //this.setState({show:this.props.loading});
  }
  componentWillMount(){

  }

  render(){

    let styles ={
      display:'block',
      width:'100%',
      textAlign:'center',
      color:'#333',
      position:'absolute'
    }
    if(this.props.show){
      if(this.props.style){
        styles.display = this.props.style;
        return
      }
      styles.display = 'block';
    }else{
      styles.display = 'none'
    }
  //  console.error(this.props.label , this.props.show);



    return (<div style={styles} data-component='ToggleUI'>
      <h4 style={{padding:20}}>{this.props.label}</h4>
      {this.props.icon}
    </div>)
  }
}
