import React, {memo, useState} from 'react';
import classes from '../styles.module.scss';
import {NavLink, useMatch} from "react-router-dom";
import {book} from "../../../constans/Books";
import MyCustomLink from "../../MyCustomLink";

const NavMenu = () => {
  const active = classes.active

  const [navTitle, setNavTitle] = useState([
    {id: 1, title: 'Home', link: book.home},
    {id: 2, title: 'MininAllHooks', link: book.allHooks},
    {id: 3, title: 'MininFastStart', link: book.fastStart},
    {id: 4, title: 'HooksUseState', link: book.hooksUseState},
    {id: 5, title: 'HooksUseEffect', link: book.hooksUseEffect},
    {id: 6, title: 'FundamentalCourse', link: book.fundamentalCourse},
    {id: 7, title: 'TestPage', link: book.testPage},
  ])

  // const classNameActiveLink = (link) => {
  //
  //   if (link) {
  //     return active
  //   }
  //   return null
  // }


  // ЛАКОНИЧНЕЕ БЫСТРЕЕ ПРОЩЕ ПОНЯТНЕЕ
  // const classNameActiveLink = (link) => link ? active : null


  return (
    <nav>

      {/*{navTitle.map(item =>*/}
      {/*  <NavLink*/}
      {/*    // className={({isActive}) => classNameActiveLink(isActive)}*/}
      {/*    to={item.link}*/}
      {/*    key={item.id}*/}
      {/*  >*/}
      {/*    {item.title}*/}
      {/*  </NavLink>*/}
      {/*)}*/}

      {navTitle.map(item =>
        <MyCustomLink
          className={classes.usual}
          to={item.link}
          key={item.id}
        >
          {item.title}
        </MyCustomLink>
      )}

    </nav>
  );
};

export default memo(NavMenu);