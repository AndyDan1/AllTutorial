import React, {memo, useState} from 'react';
import classes from '../styles.module.scss';
import NavMenuItem from "./NavMenuItem";
import {book} from "../../../constans/Books";

const NavMenu = () => {
  const [subLink, setSubLink] = useState([
    {id: 1, title: 'useState',link:book.allUseState},
    {id: 2, title: 'useEffect',link:book.allUseEffect},
    {id: 3, title: 'useRef',link:book.allUseRef},
    {id: 4, title: 'useMemo',link:book.allUseMemo},
    // {id:1, title:'',active:false},
  ])

  return (
    <ul className={classes.navigate_bar}>
      {subLink.map(item=>
        <NavMenuItem
          key={item.id}
          link={item.link}
          title={item.title}
        />
      )}
    </ul>

  );
};

export default memo(NavMenu);