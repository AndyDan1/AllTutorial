import React, {memo} from 'react';
import classes from './styles.module.scss';
import AllContainer from "../AllContainer";
import Logo from "./components/Logo";
import NavMenu from "./components/NavMenu";

const Header = () => {
  return (
    <header>
      <AllContainer
        className={classes.container}
      >
        <Logo/>

        <NavMenu/>
      </AllContainer>
    </header>
  );
};

export default memo(Header);