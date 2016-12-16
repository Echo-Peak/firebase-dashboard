// import {observable ,computed ,action ,observe ,autorun} from 'mobx';
// import debounce from '../components/util/debounce';
// import {parse} from 'query-string';
// import {browserHistory} from 'react-router';
// import {regex} from '../components/util/regex';
// import uuid from '../components/util/uuid';
// import Ajax from 'superagent';
import Global from './firebase/index';
import Traverse from './firebase/traverse';
import Observables from './firebase/$';
import Modify from './firebase/modify';
import Validator from './firebase/validate';
import Util from './firebase/util';


// export let globalStore = Object.assign(new Global(observables) , {
//   observables,
//   traverse:new Traverse(observables),
//   modify:new Modify(observables),
//   validate:new Validator(observables),
//   util:new Util(observables)
// });
export default function(messages , this_instance){
  let observables = new Observables();

  return Object.assign(new Global(observables , messages , this_instance) , {
    observables,
    traverse:new Traverse(observables , messages , this_instance),
    modify:new Modify(observables , messages),
    validate:new Validator(observables , messages),
    util:new Util(observables , messages)
  });
}
