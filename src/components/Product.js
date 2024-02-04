import React,{useState, useEffect} from 'react'; 
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { getProducts } from '../store/productSlice';
import { Alert } from 'bootstrap';
const Product = () => {
    //const [products, getProducts]= useState([]);
    const dispatch=useDispatch();
    const {data: products,status}=useSelector(state => state.products);
    
    useEffect (() =>{
    //using async thunk method
    dispatch(getProducts());
    
        // Using Direct Method
    // fetch('https://fakestoreapi.com/products')
    // .then (data=>data.json())
    // .then (result=>getProducts(result))
    
},[]);
if(status==="loading"){
    return <p>loading</p>
}
if(status==="error"){
    return <Alert keys="danger">Something went wrong</Alert>
    
}
const addCart=(product)=>{
dispatch(add(product));
}
const cards = products.map(product => (
    <div className="col-md-3" style={{ marginBotton: '10px' }}>
    <Card key={product.id} className="h-100">
    <div className="text-center">
   <Card.Img variant="top" src={product.image} style={{ width : '100px', height: '130px'}} />
    </div>
    <Card.Body>
    <Card.Title>{product.title}</Card.Title>
    <Card.Text>
    INR: {product.price}
    </Card.Text>
    </Card.Body>
    <Card.Footer style={{ background : 'white'}}>
    <Button variants="primary" onClick={()=>addCart(product)}>Add To Cart</Button>
    </Card.Footer>
    </Card>
    </div>
))
    return(
    <>
    <h1>Product Dashboard </h1>
    <div className='row'>
{cards}
    </div>
    </>
    );
}   
export default Product;