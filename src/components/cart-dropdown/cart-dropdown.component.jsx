import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {createStructuredSelector} from "reselect";
import {selectCartItems} from "../../redux/cart/cart.selector";
import './cart-dropdown.style.scss';
import {withRouter} from 'react-router-dom'
import {toggleCartHidden} from "../../redux/cart/cart.actions";

const CartDropdown = ({ cartItems,history,toggleCartHidden}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.length?cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
            )):<span className='empty-message'>Your Cart is Empty</span>}
        </div>
        <CustomButton onClick={()=> {
            history.push('/checkout');
             toggleCartHidden()
        }}>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps =  createStructuredSelector ({
    cartItems:selectCartItems
});

const mapDispatchToProps=dispatch=>({//you dont need to pass mapdispatch because by default dispath is
    //passed to connect function
    toggleCartHidden:()=>dispatch(toggleCartHidden())
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CartDropdown));