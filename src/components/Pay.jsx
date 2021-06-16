import React from 'react';
import Card from './Card';



class Pay extends React.Component {
    constructor() {
        super();
        this.state = {
            basket: [],
            total: 0,
            totalTVA: 0,
            totalEcoTax: 0,
            totalTTC: 0,
        }
        this.handleSelect = this.handleSelect.bind(this)

    }
 

    handleSelect(name, price) {
        const handleSelectToAdd = {
            name: name,
            price: price
        }

        const newBasket = [...this.state.basket, handleSelectToAdd]
       

        let total = 0
        for (let i = 0; i < newBasket.length; i++) {
            const item = newBasket[i]
            total = total + Number (item.price)
        }
        const totalEcoTax = 0.03 * newBasket.length

        const totalTVA = total * 20 / 100

        const totalTTC = total + totalEcoTax + totalTVA

        this.setState({ total, totalTVA, totalEcoTax, totalTTC, basket: newBasket })
    }

    //     function calcul(...basket) {
    //     basket.price.forEach(price => {
    //         let total = 0;
    //         total += price;
    //         console.log(calcul);
    //     });

    // }

    render() {
        return (
            <div>
                <p>total: {this.state.total} €</p>
                <p>total TVA: {this.state.totalTVA} €</p>
                <p>total EcoTax: {this.state.totalEcoTax} €</p>
                <p>total TTC: {this.state.totalTTC} €</p>
                <div className="row">
                    {this.props.items.map((item, index) =>
                        <div className="col-4 mb-3" key={index}>
                            <Card

                                productName={item.name}
                                price={item.price}
                                onClick={this.handleSelect}
                            />
                        </div>,
                    )}
                </div>
            </div>
        )
    }
}
export default Pay