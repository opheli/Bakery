import React from 'react';

class Add extends React.Component {
    constructor() {
        super()
        this.state = {
            productName: "",
            price: 1,
        }

        this.updateProductName = this.updateProductName.bind(this)
        this.updatePrice = this.updatePrice.bind(this)
        this.sendItem = this.sendItem.bind(this)
    }

    updateProductName(e) {
        this.setState({ productName: e.target.value })
    }

    updatePrice(e) {
        this.setState({ price: e.target.value })
    }

    sendItem() {
        this.props.onAdd(this.state.productName, this.state.price)
    }

    render() {
        return (
            <div className="input-group mb-3">
                <input
                    onChange={this.updateProductName}
                    type="text"
                    className="form-control"
                    placeholder="Taper le nom de votre article"
                    aria-label="nom article"
                    aria-describedby="basic-addon2" />
                
                <input
                    type="range"
                    defaultValue={0}
                    value={this.state.value}
                    onChange={this.updatePrice}
                    className="form-range" />
                
                <button
                    onClick={this.sendItem}
                    type="button"
                    className="btn btn-success rounded"
                > Add To List - {this.state.price}€</button>


            </div>
        )
    }
}

export default Add