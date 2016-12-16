import {observable , action} from 'mobx';
import Global from './index';
// observables only
export default class _observables{
  @observable show_sidebar = false
  @observable show_bottom_action = false
  @observable show_dialog = false
  @observable show_recovery = false
  @observable firebase_action = 'update'
  @observable currentView = null
  @observable errorCurrentView = null
  @observable active = ''
  @observable editor = null
  @observable nodes = []
  @observable modes = ['json' , 'interactive']
  @observable isWatching = false
  @observable hasError = false
  @observable show_update = false
  @observable show_modified = false
  @observable validJSON = null
  @observable checking = null
  @observable syncing = false
  @observable snapshots = []
  @observable selectedSnapshot = ''
  @observable config = {
    databaseName:'',
    databaseURL:'',
    defaultNode:'/',
    localDB:'',
    watch:false,
    keyboardSave:true,
    persistToDisk:true,
    cacheChecking:true,
    mode:'json',
    url:'',
    editor:{
      showRoot:false,
      firstRun:false,
      charLimit:0
    }
  }
  @action setProp(prop ,value){
    this[prop] = value
  }
}
