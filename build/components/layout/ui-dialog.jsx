import React from 'react';
let {Component} = React;
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {observer} from 'mobx-react';



let schemas = {
  blog:{

  },
  code:{

  },
  project:{

  },

}
@observer
export default class ui_dialog extends Component{
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
    let global = this.props.store;
    let {observables , util} = this.props.store;
    //console.log(">>>" ,observables.show_dialog);

    const actions = [
      <RaisedButton
          label={'ok'}
          primary={true}

          onTouchTap={e => util.toggle('dialog' ,false)}
        />,
        <RaisedButton
            label={'Add'}
            secondary={true}

            onTouchTap={e => !util.update() &&  util.toggle('dialog' ,false)}
          />
];
    return (<Dialog
          title={`Edit item for ${observables.active}`}
          actions={actions}
          modal={false}
          open={observables.show_dialog}
          onRequestClose={e => store.closeDialog()}>


        </Dialog>)
  }
}
