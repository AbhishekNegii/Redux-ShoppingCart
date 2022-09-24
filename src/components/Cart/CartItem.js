import { useDispatch} from 'react-redux';
import { addCartActions } from '../../store/addCartSlice';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;

 const dispatch= useDispatch()
  
  
  const reduceItemHandler=()=>{ 
    dispatch(addCartActions.removeItemFromCart(id))
  }
  const addItemHandler=()=>{
    dispatch(addCartActions.addItemToCart({
      id:id,
      title:title,
      price:price
    }))
  }
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total}{' '}
          <span className={classes.itemprice}>(${price}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={reduceItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
