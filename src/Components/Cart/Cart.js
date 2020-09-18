import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

const Cart = (props) => {
	const { cart } = props;
	const total = cart.reduce((total, course) => total + course.price, 0);
	const discount = total * 0.25;
	const tax = total * 0.15;

	const roundFigure = (num) => {
		const precision = num.toFixed(2);
		return Number(precision);
	};

	return (
		<div className="cart">
			<div className="header">
				<h4>Cart</h4>
				<div>Course Enrolled: {cart.length}</div>
			</div>
			<div className="body">
				<div>
					<span>Total Price: </span>
					<span>${roundFigure(total)}</span>
				</div>
				<div>
					<span>Discount (25%): </span>
					<span>${roundFigure(discount)}</span>
				</div>
				<div>
					<span>Tax (15%): </span>
					<span>${roundFigure(tax)}</span>
				</div>
				<div>
					<span>Grand Total: </span>
					<span>${roundFigure(total + tax - discount)}</span>
				</div>
				<Button variant="dark" size="sm" block> <FontAwesomeIcon icon={faShoppingBag} /> Checkout </Button>
			</div>
		</div>
	);
};

export default Cart;
