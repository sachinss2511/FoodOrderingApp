import React from 'react'
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';

const header =  props => {
return (
<>
<header className={classes.header}>
    <h1>Discover the best meals & drinks </h1>
   <HeaderCartButton clicking={props.onShowCart}/>
</header>
<div className={classes['main-image']}>
    <img src = '\assets\meals.jpg' alt = "A tabel full of delicious food"/>
</div>
</>
)
}

export default header