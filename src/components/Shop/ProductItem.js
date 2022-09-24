import { useDispatch } from "react-redux";
import { addCartActions } from "../../store/addCartSlice";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const { title, price, description, id } = props;
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(
      addCartActions.addItemToCart({
        id: id,
        price: price,
        title: title,
      })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
