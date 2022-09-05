import React, {memo} from 'react';
import classes from './styles.module.scss';
import clsx from "clsx";

const AllContainer = ({children , className}) => {
  return (
    <div className={clsx(classes.container,className)}>
      {children}
    </div>
  );
};

export default memo(AllContainer);