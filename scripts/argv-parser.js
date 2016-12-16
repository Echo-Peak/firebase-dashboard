module.exports = function(argv){
  let str = argv.join(' ').match(/\-[a-z\-0-9]+:[a-z\-0-9]+/gi);
  if(!str){
    return argv
  }
  return str.reduce((start ,item) =>{
    let i = item.replace(/^\-/,'').split(':');

    if(i[1] === 'true' || i[1] === 'false'){
      start[i[0]] = JSON.parse(i[1]);
    }else if(i[1].match(/,/g)){
    
      start[i[0]] = i[1].split(',');
    }else if(i[1].match(/\d+/g)){

      start[i[0]] = parseInt(i[1]);
    }else{
      start[i[0]] = i[1];
    }


    return start
  },{})

}
