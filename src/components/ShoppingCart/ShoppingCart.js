import React, { useMemo, useState } from 'react';
import {
    Container,
    ImageCart,
    Counter
} from './style';
import cartLottie from '../../assets/cart-checkout.png';

const ShoppingCart = ({ counter, max }) => {
    const [transition, setTransion] = useState(false);
    let maxValue = max ? max : 100;
    const count = useMemo(() => {
        setTransion(true);
        setTimeout(() => { setTransion(false) }, 500);
        return counter > maxValue ? maxValue : counter
    }, [counter, maxValue]);
    return (
        <Container>
            {count > 0 &&
                <Counter
                    play={transition}
                    count={count}
                    maxValue={maxValue}
                >
                    {count}
                </Counter>
            }
            <ImageCart src={cartLottie} alt="cart-checkout" />
        </Container>
    )
}

export default ShoppingCart;
