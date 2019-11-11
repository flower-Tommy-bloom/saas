import React,{useState,useEffect} from 'react'
const Apps = () => {
  const [times,setTimes] = useState(0)
  useEffect(()=>{
    console.log('useEffect')
  })
  function clickHere(){
    setTimes(times + 1)
  }
  return(
    <div>
      <h1 onClick={clickHere.bind(this)}>click {times} times</h1>
    </div>
  )
}
export default Apps