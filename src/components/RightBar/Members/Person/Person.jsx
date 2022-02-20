import React from "react";
import "./Person.css";

const Person = ({ personName }) => {
	return (
		<div className="persons">
			<i className="fa-solid fa-person"></i>
			<p className="paragraph">{personName}</p>
		</div>
	);
};

export default Person;
