import React, {memo} from 'react';
import classes from '../styles.module.scss';
import Counter from "./Counter";
import ObjectWithUseState from "./ObjectWithUseState";

const UseState = () => {
  return (
    <div className={classes.column}>
      <Counter/>
      <ObjectWithUseState/>
    </div>
  );
};

export default memo(UseState);