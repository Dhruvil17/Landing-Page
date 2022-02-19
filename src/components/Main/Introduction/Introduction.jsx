import React from "react";
import Welcome from "./Welcome/Welcome";
import Text from "./Text/Text";
import "./Introduction.css";

const Introduction = () => {
	return (
		<div className="main">
			<Welcome />
			<Text />
		</div>
	);
};

export default Introduction;
