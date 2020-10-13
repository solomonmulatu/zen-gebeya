import React from "react";
import './header.style.scss';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {ReactComponent as Logo} from "../assets/crown.svg";
import {auth} from "../../firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import {createStructuredSelector} from "reselect";
import {selectCartHidden} from "../../redux/cart/cart.selector";
import {selecetCurrentUser} from "../../redux/user/user.selector";

const Header = ({currentUser,hidden}) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {currentUser ? <div className='option' onClick={() => {
                auth.signOut()
            }}>SIGN OUT</div> : <Link className='option' to='/signin'>SIGN IN</Link>}
            <CartIcon />
        </div>
        {
            hidden?null:<CartDropdown/>
        }

    </div>
)
const mapStateTOProps=createStructuredSelector({//{user:{currentUser},cart:{hidden}} this is object destrucuring
    //and is the same as state.user.currentUser and state.cart.hidden
    currentUser:selecetCurrentUser,
    hidden:selectCartHidden
})

export default connect(mapStateTOProps) (Header)