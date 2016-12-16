import React from 'react';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

export default (label) => (
  <IconButton tooltip={label}
    tooltipStyles={{transform:'translateX(50%)'}}
    style={{ position:'relative' ,width:'100%'}}>
    <FontIcon ><span className='clipable' style={{fontSize:14}}>{label}</span></FontIcon>
  </IconButton>
)
