import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span className={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                </li>
            );
        })
    return (
        <Aux>
            <h3>Order Details</h3>
            <p>Your custom delicious burger as follow:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: ${props.price.toFixed(2)} </strong></p>
            <p>Place Order now ?</p>
            <Button 
                btnType="Danger"
                clicked={props.purchaseCancelled} >CANCEL</Button>
            <Button 
                btnType="Success"
                clicked={props.purchaseContinued} >PROCEED</Button>
            
        </Aux>
    )
};

export default orderSummary;