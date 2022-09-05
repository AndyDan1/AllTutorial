import React, {memo} from 'react';
import classes from './styles.module.scss';

const Error = () => {
  return (
    <div className={classes.root}>
      COMPONENT Error
    </div>
  );
};

export default memo(Error);