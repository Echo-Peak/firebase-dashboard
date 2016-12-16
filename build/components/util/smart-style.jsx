


if(typeof document !== 'undefined'){
  let SmartStyles = document.createElement('style');
  SmartStyles.setAttribute('smart-styles' ,'');
  SmartStyles.setAttribute('id' ,'smart-styles');
  document.head.appendChild(SmartStyles);
}
export default function(selector ,props){
  let built = '';
  let topKeys = Object.keys(props);
  let Overide = props['@Overide'] || '';
  let OverideKeys = Object.keys(Overide);

  let pseudo = topKeys.filter(e => e !== '@Overide').filter(e => typeof props[e] === 'object' && props[e] !== null);
  let OverideStyles = OverideKeys.filter(e => typeof props['@Overide'][e] === 'object' && props['@Overide'][e] !== null);

  let element = topKeys.filter(e => e !== '@Overide').filter(e => pseudo.indexOf(e) < 0).reduce(function(start ,item){
    start[item] = props[item]
    return start
  },{});
    element = JSON.stringify(element)
  .replace(/"/gmi,'')
  .replace(/,/gmi,';')
  .replace(/([a-z])([A-Z])/g, '$1-$2')
  .toLowerCase();
  SmartStyles.innerText += `${selector}${element}`;

  pseudo.forEach(function(item){
    built += ` ${selector}:${item}${JSON.stringify(props[item])
      .replace(/,/gm ,';')
      .replace(/"/gm ,'')
      .replace(/content:/gmi,'content:""')
      .replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()} `
  });

  OverideStyles.forEach(function(item){
    built += ` ${selector}::${item}${JSON.stringify(props['@Overide'][item])
      .replace(/,/gm ,';')
      .replace(/"/gm ,'')
      .replace(/content:/gmi,'content:""')
      .replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()} `
  });

SmartStyles.innerText += built


}
