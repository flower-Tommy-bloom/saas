import React, {PureComponent} from 'react'
export default class Home extends PureComponent{
  constructor(){
    super()
    console.log(window.API)
  }
  render(){
    return (
      <div className="home">
        <div>
          <span>hello world</span>
        </div>
      </div>
    )
  }
}
