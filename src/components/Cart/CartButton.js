import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cartSlice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const quantity=useSelector(state=>state.cartItem.totalQuantity)
  const dispatch=useDispatch()
  const toggleCartHandler=()=>{
        dispatch(cartActions.toggle())
  }
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
