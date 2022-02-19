import React from "react";
import "./Numbers.css";

const Groups = ({ groupName }) => {
	return (
		<div className="groups">
			<i class="fa-solid fa-circle"></i>
			<p>{groupName}</p>
		</div>
	);
};

export default Groups;
