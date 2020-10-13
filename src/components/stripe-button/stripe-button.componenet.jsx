import React from "react";
import StripeCheckout from "react-stripe-checkout";
const StripeCheckoutButton=({price})=>{
    const priceForStripe=price*100;
    const publishableKey='pk_test_51HanuBI3Idn2iZejvw08831VugZf7vP06iIJpWGKE9ZBLh6CI3m8T1yiPGgNbHBLqsHNg9vW8jRtDLlt6hxtvOiI00EwMojQaq'
const onToken=token=>{
        console.log(token)
    alert('payment Successfull')
}
    return(
        <StripeCheckout
        label='Pay Now'
         name='Zen Gebeya'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'

        description={`Your Total is$${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />

    )
}
export default StripeCheckoutButton;