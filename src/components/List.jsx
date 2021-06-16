
import React from 'react';
// import Add from './Add'

class List extends React.Component {

  render() {
    return (
      <div>
        <ol className="list-group list-group-numbered">
          {this.props.items.map(
            (item, index) => <li className="list-group-item"
              key={index}>{item.name} - {item.price}€</li>)}
        </ol>
      </div>
    )
  }
}
export default List