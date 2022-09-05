import React, {memo, useState, useMemo, useEffect} from 'react';
import classes from '../styles.module.scss';
import logo from "../../../component/Header/components/Logo";

function complexCompute(num) {
  console.log('I Want this')
  let i = 0;
  while (i < 1000000000) i++
  return num * 2
}

const UseMemo = () => {
  const [number, setNumber] = useState(42)

  const [colored, setColored] = useState(false)

  // const styles = useMemo(() => {
  //  return {
  //    color: colored ? 'red' : 'black'
  //  }
  // }, [colored])

  const styles = useMemo(() => ({
    color: colored ? 'red' : 'black'
  }), [colored])


  const computed = useMemo(() => {
    return complexCompute(number)
  }, [number])

  useEffect(() => {
    console.log('Styles Changed')
  }, [styles])


  return (
    <div className={classes.useMemo}>
      <h1>UseMemo</h1>
      <div className={classes.description}>
        <p>Кеширует елемент, передает колбек</p>
        <p> Mожет сохранять обьекты до следующего рендера </p>
        <p>useMemo(()=>что выводить},[второй параметр набор зависимостей])</p>
      </div>
      <h2 style={styles}>Вычисляемое свойство :{computed}</h2>
      <button onClick={() => setNumber(prev => prev + 1)}>Добавить</button>
      <button onClick={() => setNumber(prev => prev - 1)}>Удалить</button>
      <button onClick={() => setColored(prev => !prev)}>Изменить</button>
    </div>
  );
};

export default memo(UseMemo);