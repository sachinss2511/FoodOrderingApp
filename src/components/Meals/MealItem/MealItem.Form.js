import Input from '../../UI/Input';
import './MealItemForm.css'

const MealItemForm = props => {
    return <form className="form">
        <Input label="Amount" input ={{
            id:  props.id,
            type : 'number',
            min : '1',
            max : "5",
            step : '1',
            defaultValue : '1',
        }}/>
        <button>+ADD</button>
    </form>
}

export default MealItemForm;