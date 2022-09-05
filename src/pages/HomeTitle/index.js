import React, {memo} from 'react';
import classes from './styles.module.scss';
import AllContainer from "../../component/AllContainer";

const HomeTitle = () => {
  return (
    <section className={classes.nav}>
      <AllContainer>
        <h1>MY Test List</h1>

        <ul>
          <li>test 1</li>
          <li>test 2</li>
          <li>test 3</li>
          <li>test 4</li>
          <li>test 5</li>
          <li>test 6</li>
          <li>test 7</li>
        </ul>
      </AllContainer>
    </section>
  );
};

export default memo(HomeTitle);