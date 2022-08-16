import React from 'react'
import "./ProductCard.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard({title, description, price, location, url}) {
    // const {title, description, price, location, url} = item
    return (
        <div className='product-cards'>
            <Card style={{ width: '18rem' }}>
                    <Card.Title style={{margin: 20 }}>{title}</Card.Title>
                <Card.Img variant="top" src={url} width={150} height={150} style={{padding: 5 }}/>
                <Card.Body>
                    <Card.Title style={{}}>{price}</Card.Title>
                    <Card.Text style={{margin: 0}}>
                        {description}
                    </Card.Text>
                    <p style={{margin: 0}}>{location}</p>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProductCard;