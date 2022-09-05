import React, {memo} from 'react';
import { Link, Outlet} from "react-router-dom";

import classes from './styles.module.scss';
import {book} from "../../constans/Books";
import AllContainer from "../../component/AllContainer";

const FundamentalCourse = () => {
  return (
    <section className={classes.fundamentalCourse}>
      <h1>Fundamental Course</h1>

      <AllContainer
        className={classes.container}
      >
      <nav>
        <ul>
          <li><Link to={book.fundamentalTest1}>Counter</Link></li>
          <li><Link to={book.fundamentalTest2}>Course</Link></li>
          <li><Link to={book.fundamentalTest3}>Click and watch Test3</Link></li>
        </ul>
      </nav>
      <Outlet/>
      </AllContainer>

    </section>
  );
};

export default memo(FundamentalCourse);