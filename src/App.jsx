import React from 'react';
import Add from './components/Add';
import List from './components/List';
import Pay from './components/Pay';
import Onglet from './components/Onglet';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeTab: "add",
      items: []
    }
  }
 
  render() {
    return (
      <div className="App d-flex ">
      <Onglet
        isSelected={this.state.activeTab === 'add'}
        onClick={()=> this.setState({activeTab:'add'})}>Add </Onglet>
      <Onglet
        isSelected={this.state.activeTab === 'list'}
        onClick={()=> this.setState({activeTab:'list'})}>List </Onglet>
      <Onglet
        isSelected={this.state.activeTab === 'pay'}
        onClick={()=> this.setState({activeTab:'pay'})}>Pay </Onglet>
        
        {this.state.activeTab === 'add' && <Add />}
        {this.state.activeTab === 'list' && <List />}
        {this.state.activeTab ===  'pay' && <Pay /> }
    </div>
    );
  }
}
export default App;