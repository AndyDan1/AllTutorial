import React, {memo} from 'react';
import classes from './styles.module.scss';

const AllSelectNoStyle = ({option,defaultValue,value,sortPost}) => {
  return (
    <div className={classes.root}>
      <select
      value={value}
      onChange={e=>sortPost(e.target.value)}
      >
        <option disabled value="">{defaultValue}</option>
        {option.map(item=>
          <option
            key={item.id}
            value={item.value}
          >
            {item.name}
          </option>
        )}
      </select>
    </div>
  );
};

export default memo(AllSelectNoStyle);