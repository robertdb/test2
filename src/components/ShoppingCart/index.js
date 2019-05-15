import ShoppingCart from './ShoppingCart';
import PropTypes from "prop-types";

ShoppingCart.propTypes = {
    counter: PropTypes.number.isRequired,
    max: PropTypes.number,
    goTo: PropTypes.func
};

export default ShoppingCart;
