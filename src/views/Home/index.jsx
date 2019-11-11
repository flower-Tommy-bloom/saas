/* eslint-disable no-unused-vars */
import React, { PureComponent, useEffect } from 'react'
import store from '@/store'
import { changeInputAction, delItem,addTimes, getListData,apiListData } from '@/store/actionCreates'
import ListItem from './components/listItem'
export default class Home extends PureComponent{
  constructor(){
    super()
    console.log('store',store.getState())
    this.state = store.getState()
    this.changeInput = this.changeInput.bind(this)
    store.subscribe(this.storeChange)
    console.log('this.',store)
  }
  componentDidUpdate(){
    console.log(`componentDidUpdate=>You clicked ${this.state.times} times`)
  }
  
  componentDidMount(){
    console.log(`ComponentDidMount=>You clicked ${this.state.times} times`)
    const action = apiListData()
    store.dispatch(action)
  }
  changeInput(e){
    const action = changeInputAction(e.target.value)
    store.dispatch(action)
  }
  storeChange = () => {
    this.setState(store.getState())
  }
  del(index) {
    console.log('xxx',index)
    const action = delItem(index)
    store.dispatch(action)
  }
  addTimes = () => {
    const action = addTimes()
    store.dispatch(action)
  }
  render(){
    return (
      <div className="home">
        <div>
          {this.state.list.map((v,j) => 
            (<ListItem del={this.del} j={j} data={v} key={j} />)
          )}
          <span onClick={this.addTimes}>click {this.state.times} times</span><br />
          <span>{this.state.inputValue}</span><br />
          <div className="input">
            <input type="text" placeholder={this.state.inputValue}  onChange={this.changeInput} />
          </div>
        </div>
      </div>
    )
  }
}
