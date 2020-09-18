import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import "./Course.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Course = (props) => {
	const { courseImage, title, author, rating, price } = props.course;
	return (
		<Col lg={5} md={6}>
            <Card style={{ width: '18rem', height: '23rem' }}>
            <img src={courseImage} alt="" />
                <Card.Body>
                    <div>
						<strong>{title}</strong>
					</div>
					<div>
						<strong>Author:</strong> {author}
					</div>
					<div>
						<strong>Rating:</strong> {rating}
					</div>
					<p> <strong>Price:</strong> ${price} </p>
					<Button variant="dark" size="sm" block onClick={() => props.enrollNow(props.course)}> <FontAwesomeIcon icon={faShoppingCart} /> Buy Now </Button>
                </Card.Body>
            </Card>
		</Col>
	);
};

export default Course;
