import styled from 'styled-components';

// Forms, inputs, buttons

export const Container = styled.div`
    width: 100px;
    position: relative;
`;
Container.displayName = "Cart";

export const ImageCart = styled.img`
    width: 90%
`;
ImageCart.displayName = "ImageCart";

export const Counter = styled.span`
    transform: translateY(0px);
    background-color: #fa3e3e;
    border-radius: 2px;
    color: white;
    padding: 1px 9px;
    font-size: 1rem;
    position: absolute;
    top: 17px;
    right: ${({ count, maxValue }) => (count > maxValue ? "1.4rem" : "1.8rem")};
    ${ ({ play, count, maxValue }) => (maxValue > count && play) ? `
        transform: translateY(-20px);
        opacity:0
        transition: all 0s ease;
        
    ` : ''}
    ${ ({ play, count, maxValue }) => (maxValue > count && !play) ? `
        opacity:1;
        transform: translateY(0px);
        transition: all 1s ease;
    ` : ''}
`;
Counter.displayName = "Counter";
