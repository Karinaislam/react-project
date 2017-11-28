import React, { Component } from 'react';
import './ShopItem.css';
import Rating from 'react-rating';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
class ShopItem extends Component {
    render() {
        const item = this.props.item;
        return (
            <div className="item">
                <div>
                    <img src={item.img}></img>
                </div>
                <div className= "items-container">
                    <h4>{item.name}</h4>
                    <p><small>by: {item.seller}</small></p>
                    <Rating
                    className="ratings"
                     empty="fa fa-star-o" 
                     full="fa fa-star"
                     placeholder="fa fa-star"  
                     placeholderRate={3.5}
                     readonly>
                       
                    </Rating>

                    <button
                    onClick={() => this.props.handleAddtoCart(item.key)}>Add to Cart</button>
                </div>
            </div>
        );
    }
}

export default ShopItem;