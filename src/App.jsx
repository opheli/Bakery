import React from 'react';
import Add from './components/Add';
import List from './components/List';
import Pay from './components/Pay';
import Onglet from './components/Onglet';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeTab: "add",
      items: [],
      itemsImage: [],
    }
    this.addItem = this.addItem.bind(this)
  }

  addItem(name, price) {
    const itemToAdd = {
      name: name,
      price: price,
      image: ''
    }
    
    const itemFound = this.state.itemsImage.find(item => item.name === name)
    console.log(itemFound)

    itemToAdd.image = itemFound ? itemFound.image : '/images/item.png'

    this.setState({
      items: [...this.state.items, itemToAdd]
    })
  }

  deleteItem = (index) => {
    this.state.items.splice(index, 1)
    this.setState({ items: [...this.state.items] })
  }

  async componentDidMount() {
    try {
      const result = await fetch('https://raw.githubusercontent.com/StephaneRavet/datamock/main/bakery.json')
      const productResult = await result.json()
      this.setState({
      itemsImage: productResult
      })
    } catch (error) {
      console.error(error)
    }
  }


  render() {
    return (
      <div className="container bg-light p-5">

        <Onglet
          isSelected={this.state.activeTab === 'add'}
          onClick={() => this.setState({ activeTab: 'add' })}>Add </Onglet>
        <Onglet
          isSelected={this.state.activeTab === 'list'}
          onClick={() => this.setState({ activeTab: 'list' })}>List </Onglet>
        <Onglet
          isSelected={this.state.activeTab === 'pay'}
          onClick={() => this.setState({ activeTab: 'pay' })}>Pay </Onglet>
        <hr></hr>
        {this.state.activeTab === 'add' && <Add onAdd={this.addItem} />}
        {this.state.activeTab === 'list' && <List items={this.state.items} deleteItem={this.deleteItem}/>}
        {this.state.activeTab === 'pay' && <Pay items={this.state.items} />}
      </div>
    );
  }
}

export default App;