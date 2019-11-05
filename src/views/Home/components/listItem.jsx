import React from 'react'

const ListItem = (props) => {
  return (
    <p className="list" onClick={props.del.bind(this,props.j)}>{props.j + props.data.description}</p>
  )
}
export default ListItem