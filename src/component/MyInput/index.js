import React, {memo} from 'react';
import classes from './styles.module.scss';

const MyInput = ({...props}) => {
  return (
    <div className={classes.root}>
      <input
        {...props}

      />
    </div>
  );
};

export default memo(MyInput);