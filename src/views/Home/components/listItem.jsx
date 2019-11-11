import React,{useState,useEffect } from 'react'


const ListItem = (props) => {
  const [times,setCount ] = useState(0)
  const [ work , setWork ] = useState('前端程序员')

  const xxx = () => {
    setCount(times + 500)
    setWork('xxxxxxxxxx')
  }
  useEffect(()=>{
    console.log(`useEffect=>You clicked ${times} times`)
  })
  return (
    <div>
      <span onClick={xxx}>click {times} times</span>
      <span onClick={xxx}>click {work} times</span>
      <p className="list" onClick={props.del.bind(this,props.j)}>{props.j + props.data.description}</p>
    </div>
  )
}
export default ListItem