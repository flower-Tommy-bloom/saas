import React, {PureComponent} from 'react'
import { Button } from 'react-weui'
import '@/style/home1.less'
export default class Home extends PureComponent{
  render(){
    return (
      <div >
        <div className="home">
          Hello World!
          <Button>hhh </Button>
        </div>
        <div className="home2">
          Hello World!
          <Button>hhh </Button>
        </div>
      </div>
    )
  }
}
