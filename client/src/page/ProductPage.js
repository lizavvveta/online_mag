import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import star from '../assest/star.png'
import {useParams} from 'react-router-dom'
import {fetchOneProduct} from "../http/productAPI";

const ProductPage = () => {
    const [product, setProduct]= useState({info:[]})
    const {id} = useParams()
    useEffect(() => {
        fetchOneProduct(id).then(data => setProduct(data))
    },[])

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + product.img}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{product.name}</h2>
                        <div>
                            <Image width={25} height={25} src={star}/>
                            {product.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width:300, height: 300, fontSize: 32, border: '5px solid lightgray'}}>
                        <h3>{product.price} рублей</h3>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column align-items-center">
                <h2>Характеристики продукта</h2>
                {product.info.map(info =>
                <Row key={info.id}>
                    {info.title}: {info.description}
                </Row>
                )}
            </Row>
        </Container>
    );
};

export default ProductPage;