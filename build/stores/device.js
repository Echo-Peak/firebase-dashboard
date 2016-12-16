import {observable ,computed ,action} from 'mobx';
import debounce from '../components/util/debounce';
import {parse} from 'query-string';
import {browserHistory} from 'react-router';
import UAparser from '../components/util/user-agent';

class x_device{
  static init(){
    if(typeof window !== 'undefined'){
      this.window  = true;
      let self = this.prototype;
      let ua = UAparser(window.navigator.userAgent);
      self.os = `${ua.os.name.toLowerCase()} ${ua.os.version}`;
      self.deviceType = ua.device.type ? ua.device.type : 'desktop';
      self.browser = ua.browser.name;
      self.engine = ua.engine.name;
      self.cpuCount = window.navigator.hardwareConcurrency;
      self.mq = {
        xsm:400,
        sm:450,
        md:720,
        lg:1200,
        xlg:1920,
        xxlg:2100
      }
      self.screen.width = window.innerWidth;
      self.screen.height = window.innerHeight;
      self.screen.init_width = window.innerWidth;
      self.screen.init_height = window.innerHeight;
      self.watchScreen = function(){

        let work = e => self.resize.bind(this)(window.innerWidth , window.innerHeight);
        window.addEventListener('resize' ,debounce(work ,200));
      }
    }
  }
  @observable screen = {
    width:0,
    height:0,
    init_width:0,
    init_height:0
  }
  @action resize(width ,height){
    this.screen.width = width;
    this.screen.height = height;

    let self = this;
      if(width  > self.mq.lg){
        self.global.then(global => global.toggle('sidebar' ,true));

      }else{
        self.global.then(global => global.toggle('sidebar' ,false));

      }

    if(width !== this.screen.init_width && height !== this.screen.init_height){

      if(width  > self.mq.lg){
        self.global.then(global => global.toggle('sidebar' ,true));

      }else{
        self.global.then(global => global.toggle('sidebar' ,false));

      }
    }

  }
  @action autoCheckScreen(){

    if(this.deviceType === 'mobile' || this.deviceType === 'tablet'){
      this.global.then(global => global.toggle('sidebar' ,false));
    }else{
      // device is desktop
      if(this.screen.width > this.mq.lg){
        // if window width > 1200px then open sidebar
        this.global.then(global => global.toggle('sidebar' ,true));
      }
    }
  }
  constructor(global_store){
    this.global = global_store;
    // checks if sidebar should be open or not
    if(this.window){
      this.autoCheckScreen();
      this.watchScreen();
    }
  }
}

export default !x_device.init() && x_device
