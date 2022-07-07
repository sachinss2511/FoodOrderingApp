import Modal from '../UI/Modal'
import classes from './Cart.module.css'

const Cart = props =>{
    const cartItems = <ul className={classes['cart-items']}>{[{id: 'c1',name:'Sushi', amount:2, price:12.99}
].map(item=> <li>{item.name}</li>)}</ul>

return (<Modal onClosing={props.onClosing}>
    {cartItems}
<div className={classes.total}>
    <span>Total Amount</span>
    <span>35.62</span>
</div>
<div className={classes.actions}></div>
<button className ={classes['button--alt']} onClick={props.onClosing}>Close</button>
<button className={classes.button}>Order</button>
</Modal>
) 
}

export default Cart;