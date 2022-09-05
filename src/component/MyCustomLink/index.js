import React, {memo} from 'react';
import {Link, useMatch} from "react-router-dom";
import classes from './styles.module.scss';

const MyCustomLink = ({children, to, className, ...props}) => {
  const match = useMatch(to);


  return (
    <Link
      to={to}
      style={{
        color: match ? 'black' : 'white',
        fontSize: match ? '2rem' : null,
        fontWeight: match ? '700' : null,
      }}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
};

export default memo(MyCustomLink);