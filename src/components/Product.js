import  {React } from 'react';
import { Card, Button} from 'react-bootstrap';
import Quantity from '../components/quantity';


const Product = ({data})=> {

    return (
        <>
           <Card style={{ width: '18rem', margin: '15px' }}>
             <Card.Img variant='top' src={data.image} />
             <Card.Body>
               <Card.Title>{data.name} </Card.Title>
               <Card.Text>${data.price}</Card.Text>
               <Card.Text>{data.description}</Card.Text>
               <Quantity></Quantity>

               <Button variant='primary' onClick={()=>{

               }}>Add to Cart</Button>
             </Card.Body>
           </Card>
        </>
    );

}


export default Product;