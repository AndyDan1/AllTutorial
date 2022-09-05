import React, {memo} from 'react';
import classes from '../styles.module.scss';
import HeaderLogo from '../../../img/logo192.png'

const Logo = () => {
  return (
    <div className={classes.logo}>
      <img src={HeaderLogo} alt="Logo"/>
    </div>
  );
};

export default memo(Logo);