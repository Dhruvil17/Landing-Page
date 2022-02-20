import React from "react";
import "./Important.css";

const Important = ({ text }) => {
	return (
		<div className="important-text">
			<i className="fa-solid fa-thumbtack"></i>
			<p className="pin-text">{text}</p>
		</div>
	);
};

export default Important;
