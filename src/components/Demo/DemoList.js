import React, { useMemo, useState } from 'react';
import classes from './DemoList.module.css';

const DemoList = (props) => {
  const { items } = props;
  const [isDescending, setIsDescending] = useState(true);

  const sortedList = useMemo(() => {
    console.log('Items sorted');
    return isDescending ? [...items].sort((a, b) => b - a) : items.sort((a, b) => a - b);
  }, [items, isDescending]);

  console.log('DemoList RUNNING');

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={() => setIsDescending((prevState) => !prevState)}>
        Change to {isDescending ? 'Ascending' : 'Descending'} Order
      </button>
    </div>
  );
};

export default React.memo(DemoList);
