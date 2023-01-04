import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Ratings from '../../components/Ratings/Ratings';
import products from '../../products';
import reviews from '../../reviews';
import ImagePreview from './ImagePreview/ImagePreview';

const PDP = () => {
    const [initialReviewDisplay, setInitialReviewDisplay] = useState(5);
    const params = useParams();
    const product = products.filter((a) => a.id === Number(params.productId));
    const {category, id, name, description, specs, images, imagePreview, ratings, numOfReviews, stocks, listPrice, price, variants} = product[0];
    const stocksOption = () => {
        if(stocks > 0 && stocks < 10){
            return (<Form.Select className="w-100">
                {[...Array(stocks).keys()].map((a) => <option key={a} value={a}>{++a}</option>)}
            </Form.Select>)
        } else if(stocks > 10){
            return (<Form.Select className="w-100">
                {[...Array(10).keys()].map(a => <option key={a} value={a}>{++a}</option>)}
            </Form.Select>)
        } else {
            return <Form.Label>Out of stock</Form.Label>
        }
    }

    const stockDisplay = stocks ? <>
            <Form.Group className="select mb-2 mb-lg-0">
                {stocksOption()}
            </Form.Group>
            <Form.Group className="select-actions d-flex align-items-center justify-content-between">
                <Button variant="primary">Buy Now</Button>
                <Button variant="secondary">Add To Cart</Button>
            </Form.Group>
        </>: stocksOption();

    const stocksLeft = stocks > 0 ? <p>{stocks} items left</p> : null;

    const specsDisplay = specs.map(s => (
        <tr key={Object.keys(s)}>
            <td><strong>{Object.keys(s)}</strong></td>
            <td>{Object.values(s)}</td>
        </tr>
    ));

    const productReviews = reviews.filter(r => r.id === Number(params.productId));
    const initialRev = productReviews.length && productReviews[0].reviews.length && productReviews[0].reviews.slice(0, initialReviewDisplay);
    const averageRate = productReviews.length ? Number(productReviews[0].reviews.reduce((a,b) => a + b.ratings, 0) / productReviews[0].reviews.length).toFixed(1) : null;
    console.log(productReviews)
    const productReviewsDisplay = () => {
        if(initialRev.length){
            return initialRev.map(p => (
                <div className="review d-flex align-items-center" key={p.userId}>
                    <div className="user">
                        <FontAwesomeIcon icon={solid('user')} />
                    </div>
                    <div className="review-details">
                        <Ratings ratings={p.ratings} />
                        <p className="username">{p.userId.toString().split("").map((a,b) => b > 2 ? '*' : a)}</p>
                        <p className="comment">{p.comment}</p>
                        <p className="date">{p.date}</p>
                    </div>
                </div>
            ))
        } else {
            return <div className="review"><h6>No review yet!</h6></div>
        }
    }

    const reviewButton = productReviews.length ? 
        <div className="review-button">
            <Button variant="primary">Write a review</Button>
            <Button variant="secondary">See All</Button>
        </div> : <div className="review-button">
            <Button variant="primary">Be the first to write a review</Button>
        </div>
    return (
        <div className="pdp">
            <section className="breadcrumbs">
                <Container>
                    <Link to="/">Home</Link>
                    /
                    <Link to="/">{category.charAt(0).toUpperCase() + category.slice(1)}</Link>
                    /
                    <Link to="#">{id}</Link>
                </Container>
            </section>
            <section className="upper-pdp">
                <Container>
                    <Row>
                        <Col xs={12} md={7}>
                            <ImagePreview name={name} id={id} images={images} />
                        </Col>
                        <Col xs={12} md={5}>
                            <h1>
                                {name}
                            </h1>
                            {averageRate === null ? <p>No Reviews Yet!</p> : <Ratings ratings={ratings} numOfReview={productReviews[0].reviews.length} />}
                            <p>{description}</p>
                            <div className="share-and-wishlist py-2">
                                <FontAwesomeIcon icon={solid('share-nodes')} />
                                <FontAwesomeIcon icon={regular('heart')} />
                            </div>
                            <div className="product-prices d-flex align-items-center justify-content-between py-2">
                                <div className="listprice-and-save">
                                    <del>P{listPrice}</del><br />
                                    <strong>Save {listPrice - price}</strong>
                                </div>
                                <h3>
                                    {price}
                                </h3>
                            </div>
                            <Form className="number-of-orders d-block d-lg-flex align-items-center justify-content-between">
                                {stockDisplay}
                            </Form>
                            {stocksLeft && <div className="py-2">{stocksLeft}</div>}
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="description">
                <Container>
                    <h3>Descriptions</h3>
                    <p>{description}</p>
                </Container>
            </section>
            <section className="specs">
                <Container>
                    <h3>Specifications</h3>
                    <Table striped bordered hover>
                        <tbody>
                            {specsDisplay}
                        </tbody>
                    </Table>
                </Container>
            </section> 
            <section className="reviews">
                <Container>
                    <Row>
                        <Col><h3>Reviews {productReviews.length > 0 && '(' + productReviews[0].reviews.length + ')'}</h3></Col>
                        {averageRate ? <Col className="text-end"><Ratings ratings={averageRate} /></Col> : <Col className="text-end"><Ratings ratings={0} /></Col>}
                    </Row>
                    <Row>
                        {productReviewsDisplay()}
                        {reviewButton}
                    </Row>
                </Container>
            </section>
        </div>
    );
}
 
export default PDP;