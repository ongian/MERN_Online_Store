import React from 'react';
import {Row, Col, Container, Carousel, Button} from 'react-bootstrap';
import Ratings from '../../components/Ratings/Ratings';
import bannerImg1 from '../../images/laptops.png';
import products from '../../products';
import categories from '../../categories';
import {Link} from 'react-router-dom'
import SKUDisplay from '../../components/SKUDisplay/SKUDisplay';
const Home = () => {

    const bestSellerSKUs = products.sort((a, b) => b.productSoldByWeek - a.productSoldByWeek);
    const topRatedSKUs = products.sort((a, b) => b.ratings - a.ratings).slice(0,5);

    const bestSellers = bestSellerSKUs.map((p) => {
        let props = {
            id: p.id,
            imagePreview: p.imagePreview,
            name: p.name,
            listPrice: p.listPrice,
            ratings: p.ratings,
            numOfReviews: p.numOfReviews,
            price: p.price
        }
        return <SKUDisplay key={p.id} {...props} />
    })

    const toprated = topRatedSKUs.map((p) => {
        let props = {
            id: p.id,
            imagePreview: p.imagePreview,
            name: p.name,
            listPrice: p.listPrice,
            ratings: p.ratings,
            numOfReviews: p.numOfReviews,
            price: p.price
        }
        return <SKUDisplay key={p.id} {...props} />
    }).sort((a, b) => b.ratings - a.ratings)
    return (
    <div className="home">
        <section className="bg-gray">
            <Container className="pt-4 pb-5">
                <Carousel>
                    <Carousel.Item>
                        <Row className="align-items-center">
                            <Col xs={12} md={{order: 2, span: 6}} className="text-center">
                                <img src={bannerImg1} className="img-fluid mb-4 mb-md-0" alt="laptops" />
                            </Col>
                            <Col xs={12} md={{order: 1, span: 6}}>
                                <h1 className="text-success">Lorem Ipsum</h1>
                                <p className="text-success my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <Button href="/shop-now" variant="primary">Shop Now</Button>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row className="align-items-center">
                            <Col xs={12} md={{order: 2, span: 6}} className="text-center">
                                <img src={`/images/products/${bestSellerSKUs[0].id}/${bestSellerSKUs[0].imagePreview}`} className="img-fluid mb-4 mb-md-0" alt="laptops" />
                            </Col>
                            <Col xs={12} md={{order: 1, span: 6}}>
                                <h1 className="text-success">Best Seller of the Week</h1>
                                <h3 className="text-success my-4">{bestSellerSKUs[0].name}</h3>
                                <Ratings ratings={2.5} numOfReview={25} variant="success" />
                                <Button href={`/product/${bestSellerSKUs[0].id}`} variant="primary" className="my-4">Shop Now</Button>
                            </Col>
                        </Row>
                    </Carousel.Item>
                </Carousel>
                
            </Container>
        </section>
        <section className="categories">
            <Container>
                <h2 className="pb-4">Shop By Category</h2>
                <Row className="justify-content-center">
                    {categories.map(c => (
                            <Col xs={12} md={4} key={c.category} className="text-center">
                                <div className="bg-gray p-5">
                                    <img className="img-fluid" src={`/images/category/${c.image}`} alt={c.category} />
                                </div>
                                <h5 className="pt-4">{c.category.toUpperCase()}</h5>
                            </Col>
                        )
                    )}
                </Row>
            </Container>
        </section>
        <section className="best-seller">
            <Container>
                <div className="d-flex align-items-center pb-4 justify-content-center justify-content-md-start">
                    <h2 className="pe-4">Best Seller</h2>
                    <Link to="best-seller" className="btn btn-outline-primary">See more</Link>
                </div>
                <Row className="justify-content-center">
                    {bestSellers}
                </Row>
            </Container>
        </section>
        <section className="top-rated">
            <Container>
                <div className="d-flex align-items-center pb-4 justify-content-center justify-content-md-start">
                    <h2 className="pe-4">Top Rated</h2>
                    <Link to="best-seller" className="btn btn-outline-primary">See more</Link>
                </div>
                <Row className="justify-content-center">
                    {toprated}
                </Row>
            </Container>
        </section>
    </div>);
}
 
export default Home;