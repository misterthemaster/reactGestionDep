import React from 'react';
import Menu from './Menu';

const Header = ({...props}) => {
  return (
    <header>
      <Menu info={props}/>
    </header>
  );
}

export default Header; 