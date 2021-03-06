import React from "react";
import "./Numbers.css";

const Groups = ({ groupName }) => {
	return (
		<div className="groups">
			<i className="fa-solid fa-circle"></i>
			<p className="groupName">{groupName}</p>
		</div>
	);
};

export default Groups;
