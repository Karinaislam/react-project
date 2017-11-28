import React, { Component } from 'react';
import fakeData from '../../fakeData';
import ShopItem from '../ShopItem/ShopItem';

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state={
            items:[],
            cart:[]
        }
        this.handleAddtoCart = this.handleAddtoCart.bind(this);
    }
    


    componentDidMount() {
        var first10 = fakeData.slice(0,10);
        this.setState({
            items: first10
        })
    }
    
    handleAddtoCart(key){
        var addedItem = this.state.items.find(item => item.key === key);
        var newCart =[...this.state.cart];
        newCart.push(addedItem);
        this.setState({
            cart: newCart
        })
    }


    render() {
        return (
            <div>
                <h1>cart Size:{this.state.cart.length}</h1>
                {
                    this.state.items.map(item => <ShopItem 
                    key={item.key} 
                    item={item}
                    handleAddtoCart={this.handleAddtoCart} >{item.name}</ShopItem>)
                }

            </div>
        );
    }
}

export default Shop;