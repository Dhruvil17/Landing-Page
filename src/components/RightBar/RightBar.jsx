import React from "react";
import Login from "./Login/Login";
import Members from "./Members/Members";
import Announcements from "./Announcements/Announcements";
import "./RightBar.css";

const RightBar = () => {
	return (
		<div className="right-bar">
			<Login buttonName="Login" />
			<Members />
			<Announcements />
		</div>
	);
};

export default RightBar;
