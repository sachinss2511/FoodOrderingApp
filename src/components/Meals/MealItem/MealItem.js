import  './MealItem.css'
import MealItemForm from './MealItem.Form'
const MealItem = props => {
    const price = `$${props.price.toFixed(2)}`
    return (
      <li>
        <div>
          <h3>{props.name}</h3>
          <div className='description'>{props.description}</div>
          <div className='price'>{price}</div>
        </div>
        <div>
            <MealItemForm id ={props.id}/>
        </div>
      </li>
    );
}
export default MealItem