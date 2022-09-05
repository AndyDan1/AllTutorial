import React, {memo} from 'react';
import classes from './styles.module.scss';

const Loader = () => {
  return (
    <div className={classes.loader}>
      <div className={classes.lds_dual_ring}></div>
    </div>
  );
};

export default memo(Loader);