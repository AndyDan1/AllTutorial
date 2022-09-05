import React, {memo,useState , useEffect} from 'react';
import classes from '../styles.module.scss';

const UseEffect = () => {

  const [type, setType] = useState('users')
  const[data,setData]=useState([])

  const[pos,setPos]=useState({
    x:0,
    y:0
  })

  const[active,setActive]=useState(null)
  const[color,setColor]=useState('black')



  // Походу как использовать но это не точно
  // console.log('component render')
  //
  // useEffect(()=>{
  //   console.log('render')
  // })

  // useEffect(()=>{
  //   console.log('type change ', type)
  // },[type])

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json))
  },[type])

  const mouseMoveHandler = (e) =>{
    setPos({
      x:e.clientX,
      y:e.clientY
    })
  }
  // суть все слушатели должны быть удалены
  useEffect(()=>{
    window.addEventListener('mousemove',mouseMoveHandler)

    return ()=>{
      window.removeEventListener('mousemove',mouseMoveHandler)

    }
  },[])

  useEffect(()=>{
  if(active === 1){
    setColor('green')
  }
  if(active === 2){
    setColor('blue')
  }
  if(active === 3){
    setColor('red')
  }
  // return ()=>{
  //   alert('idi')
  // }
  },[active])




  return (
    <div className={classes.useEffect}>
      <h1 style={{color}}>{active || '-'}</h1>
      <button  onClick={()=>setActive(1)}>1</button>
      <button onClick={()=>setActive(2)}>2</button>
      <button onClick={()=>setActive(3)}>3</button>
      <h1>суть все слушатели должны быть удалены</h1>
      <pre>{JSON.stringify(pos, null, 2)}</pre>

      <div className={classes.root}>
        <h1>Ресурс: {type}</h1>
        <button onClick={() => setType('users')}>Пользователи</button>
        <button onClick={() => setType('todos')}>TODO</button>
        <button onClick={() => setType('posts')}>Посты</button>
      </div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default memo(UseEffect);