/* eslint-disable no-unused-vars */
import React, {PureComponent} from 'react'
import store from '@/store'
import { changeInputAction, delItem, getListData } from '@/store/actionCreates'
import ListItem from './components/listItem'
export default class Home extends PureComponent{
  constructor(){
    super()
    console.log('store',store.getState())
    this.state = store.getState()
    this.changeInput = this.changeInput.bind(this)
    store.subscribe(this.storeChange)
  }
  componentDidMount(){
    window.axios.get('/list').then((res)=>{
      console.log('res.data',res.data.data)
      const action = getListData(res.data.data)
      store.dispatch(action)
    })
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
  render(){
    return (
      <div className="home">
        <div>
          {this.state.list.map((v,j) => 
            (<ListItem del={this.del} j={j} data={v} key={j} />)
          )}
          <span>hello world</span><br />
          <span>{this.state.inputValue}</span><br />
          <span>hello world</span>
          <div className="input">
            <input type="text" placeholder={this.state.inputValue}  onChange={this.changeInput} />
          </div>
        </div>
      </div>
    )
  }
}
