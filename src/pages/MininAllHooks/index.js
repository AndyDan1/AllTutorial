import React, {memo, useEffect, useState} from 'react';
import classes from './styles.module.scss';
import {Outlet} from "react-router-dom";
import AllContainer from "../../component/AllContainer";
import Counter from "./components/Counter";
import ObjectWithUseState from "./components/ObjectWithUseState";
import UseEffect from "./components/UseEffect";
import NavMenu from "./components/NavMenu";

const MininAllHooks = () => {

  return (
    <section className={classes.allHooks}>
      <AllContainer
      className={classes.container}
      >

        <NavMenu/>

        <Outlet/>

      </AllContainer>
    </section>
  );
};

export default memo(MininAllHooks);