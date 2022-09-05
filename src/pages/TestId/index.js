import React, {memo} from 'react';
import {useParams} from "react-router-dom";
import classes from './styles.module.scss';
import AllContainer from "../../component/AllContainer";

const TestId = () => {
  const {id} = useParams()
  return (
    <div className={classes.root}>
      <h1>Test Id </h1>
      <AllContainer>
        <p>{id}</p>
      </AllContainer>
    </div>
  );
};

export default memo(TestId);