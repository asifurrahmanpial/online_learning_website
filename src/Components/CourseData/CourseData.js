import React from "react";
import fakeData from "../FakeData/FakeData";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import Course from "../Course/Course";
import Cart from "../Cart/Cart";
import "./CourseData.css";

const CourseData = (props) => {
	const courseData = fakeData.slice(0, 12);
	const [courses, setCourses] = useState(courseData);
	return (
		<div>
			<Container>
				<div className="list-body">
					<Row>
						<Col sm={8}>
								<h3>Pick Your Course</h3>
							<Row> {courses.map((course) => (<Course course={course} enrollNow={props.enrollNow} key={Math.random() + 100}/>))}</Row>
						</Col>
						<Col sm={3}> <Cart cart={props.cart}></Cart> </Col>
					</Row>
				</div>
			</Container>
		</div>
	);
};

export default CourseData;
