import Button from '@restart/ui/esm/Button';
import { React, useState } from 'react';
import { ButtonGroup } from 'react-bootstrap';

const Quantity = () => {

    const [quantity, setQuantity] = useState(0);

    // prop drilling
    // array destructuring
    // state uplifting
    // ben awad, codevolution

    return (
        <ButtonGroup>
            <Button onClick={() => { setQuantity(quantity => quantity - 1 < 0 ? 0 : quantity - 1) }}> - </Button>
            <Button disabled="true" >{quantity}</Button>
            <Button onClick={() => { setQuantity(quantity => quantity + 1) }}> + </Button>
        </ButtonGroup>
    );
}

export default Quantity;