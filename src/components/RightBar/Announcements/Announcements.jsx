import React from "react";
import Important from "./Important/Important";
import Heading from "./Heading/Heading";
import "./Announcements.css";

const Announcements = () => {
	return (
		<div className="announcements">
			<Heading buttonName="Some Important Announcements" />
			<Important text="Enter the important announcements which you want to pin here" />
			<Important text="Enter the important announcements which you want to pin here" />
			<Important text="Enter the important announcements which you want to pin here" />
		</div>
	);
};

export default Announcements;
