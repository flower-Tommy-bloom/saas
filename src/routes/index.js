import React,{useState,useEffect} from 'react'
import {Route,HashRouter,Link } from 'react-router-dom'

import Home from '@/views/Home/index'
import Hooks from '@/views/Hooks/index'

function Index() {
  useEffect(()=>{
    // console.log('useEffect=>老弟，你来了！Index页面')
    // componentWillUnmount
    return ()=>{
      // console.log('老弟，你走了!Index页面')
    }
  },[])
  return <h2>index.com</h2>
}

function List() {
  useEffect(()=>{
    // console.log('useEffect=>老弟，你来了！list页面')
  })
  return <h2>List-Page</h2>
}

const RouterConfig = ()=>{
  const [count,setCount] = useState(0)
  useEffect(()=>{
    console.log(`useEffect=>You clicked ${count} times`)
    return ()=>{
      console.log('====================')
    }
  },[count])
  function changeCount(flag){
    if(flag){
      setCount(count + 1)
    }
  }
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={()=>{changeCount(false)}}>click me</button><br />
      <button onClick={()=>{changeCount(true)}}>click me</button>
      <HashRouter>
        <ul>
          <li> <Link to="/index">首页</Link> </li>
          <li> <Link to="/list">列表</Link> </li>
        </ul>
        <Route exact path="/" component={Home}/>
        <Route exact path="/hooks" component={Hooks}/>
        <Route exact path="/index" component={Index}/>
        <Route exact path="/list" component={List}/>
      </HashRouter>
    </div>
  )
}
export default RouterConfig
