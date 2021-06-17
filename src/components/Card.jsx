import React from 'react';



class Card extends React.Component {
  render() {
    return (
      <div className="card">

        <img
          className="card-img-top"
          src={this.props.image} alt=""
          onClick={() => this.props.onClick(this.props.productName, this.props.price,)}
        />
        <div className="card-body">
          <h3 className="card-title">{this.props.productName}</h3>
          <p className="card-title">{this.props.price} €</p>
        </div>
      </div>
    )
  }
}

export default Card

