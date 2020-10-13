import React from "react";
import {ReactComponent as ShoopingIcon} from '../../pages/assets/shopping-bag.svg'
import './cart-icon.style.scss'
import {connect} from 'react-redux';
import {toggleCartHidden} from "../../redux/cart/cart.actions";
import{createStructuredSelector} from "reselect";
import {selectCartItemsCount} from "../../redux/cart/cart.selector";

const CartIcon = ({toggleCartHidden,itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoopingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapStateToProps=createStructuredSelector({
    itemCount:selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);