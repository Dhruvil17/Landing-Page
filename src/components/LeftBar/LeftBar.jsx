import React from "react";
import Buttons from "./Buttons/Buttons";
import Groups from "./Groups/Groups";
import "./LeftBar.css";

const LeftBar = () => {
	return (
		<div className="left-bar">
			<div>
				<Buttons />
			</div>
			<div>
				<Groups />
			</div>
		</div>
	);
};

export default LeftBar;
