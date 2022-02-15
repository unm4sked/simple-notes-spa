import classes from "./Card.modules.css";

function Cart(props) {
    return <div className={classes.cart}>{props.children}</div>;
}

export default Cart;
