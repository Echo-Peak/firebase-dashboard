module.exports = function stdoutColorify(msg){
  let id = msg.match(/^([\[A-Z\-\]]+)|^[A-Z\-]+/i); //must be case sensitive
  let newId = id ? id[0] : null;
  let ref = newId;
  let map = {
    MAIN:'cyan',
    LOG:'green',
    FATAL:'red',
    'SYSTEM-HANDLER':'magenta',
    SYSTEM:'red'
  }

  if(!(newId in map) || newId === null){
    newId = 'MAIN';
  }
  let newStdout = (ref in map) ? `[${newId[map[newId]]}]` : `[${newId[map[newId]]}] ${ref}`;

  return msg.replace(ref ,newStdout);
}
