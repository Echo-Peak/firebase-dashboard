import React,{Component} from 'react';
import {render} from 'react-dom';
import {renderToString} from  'react-dom/server';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import {match ,Router ,Route , IndexRoute, browserHistory ,Link} from 'react-router';
import Layout from '../components/layout';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider} from 'mobx-react'
import {STORES} from '../stores';

 class App extends Component{
  static init(appInstance){
    let proto = this.prototype;
    if(typeof window !== 'undefined'){
      proto.muiTheme = null;
      this.window = true;

      render(appInstance ,document.getElementById('app'));
    }else{

      return function(userAgent){
        proto.muiTheme = getMuiTheme({userAgent});
        return <App/>
      }
    }
  }
  constructor(props){
    super();
    this.state = {};
  }
  componentDidMount(){}
  componentWillUnmount(){}
  componentWillMount(){}

  render(){


    return (<div>
      <MuiThemeProvider muiTheme={this.muiTheme}>
          <Router history={browserHistory}>
            <Route path='/' component={props => <Layout stores={STORES}></Layout>}>


            </Route>
        </Router>
  </MuiThemeProvider>
    </div>)
  }
}
export default App.init(<App/>) && App
