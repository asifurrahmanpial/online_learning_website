import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import CourseData from "./Components/CourseData/CourseData";
import { useState } from "react";

function App() {
	const [cart, setCart] = useState([]);
	const enrollNow = (course) => {
		const newCart = [...cart, course];
		setCart(newCart);
	};

	return (
		<div className="App">
			<Header cart={cart} enrollNow={enrollNow}></Header>
		<main>
			<CourseData cart={cart} enrollNow={enrollNow}></CourseData>
		</main>
		</div>
	);
}

export default App;
