import React, {memo} from 'react';
import classes from './styles.module.scss';
import clsx from "clsx";

const AllButtonCourse = ({children, className, bgRed, bgGreen, ...props}) => {
  return (
      <button
        {...props}
        className={clsx(classes.btn,className, {
          [classes.red]: bgRed,
          [classes.green]: bgGreen,
        })}>
        {children}
      </button>
  );
};

export default memo(AllButtonCourse);