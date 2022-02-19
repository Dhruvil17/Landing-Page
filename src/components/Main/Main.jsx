import React from "react";
import Introduction from "./Introduction/Introduction";
import Recent from "./Recent/Recent";
import "./Main.css";

const Main = () => {
	return (
		<div className="main">
			<Introduction />
			<Recent />
		</div>
	);
};

export default Main;
