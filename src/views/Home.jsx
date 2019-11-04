import React, {PureComponent} from 'react'
import store from '@/store'
export default class Home extends PureComponent{
  constructor(){
    super()
    console.log('store',store.getState())
    this.state = store.getState()
    this.changeInput = this.changeInput.bind(this)
    store.subscribe(this.storeChange)
  }
  changeInput(e){
    const action = {
      type:'changeInput',
      inputValue:e.target.value
    }
    store.dispatch(action)
  }
  storeChange = () => {
    this.setState(store.getState())
  }
  render(){
    return (
      <div className="home">
        <div>
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
