import React, {memo} from 'react';
import {NavLink} from "react-router-dom";
import classes from '../styles.module.scss';

const NavMenuItem = ({title, link}) => {
  const active = classes.active

  const activeLink = (link) => link ? active : null

  return (
    <li>
      <NavLink
        to={link}
        className={({isActive})=>activeLink(isActive)}
      >
        {title}
      </NavLink>
    </li>

  );
};

export default memo(NavMenuItem);