import React, { Fragment } from 'react'
import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css';


const header =  props => {
return (
<Fragment>
<header className={classes.header}>
    <h1>veg meals</h1>
    <button>cart</button>
</header>
<div className={classes['main-image']}>
    <img src = {"https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/extra-files/meals.jpg"} alt = "A tabel full of delicious food"/>
</div>
</Fragment>
)
}
export default header