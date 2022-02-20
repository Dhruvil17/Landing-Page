import React from "react";
import Names from "./Names/Names";
import Numbers from "./Numbers/Numbers";
import "./Groups.css";

const Groups = () => {
	return (
		<div>
			<Names />
			<div className="all-numbers">
				<Numbers groupName="Group 1" />
				<Numbers groupName="Group 2" />
				<Numbers groupName="Group 3" />
				<Numbers groupName="Group 4" />
				<Numbers groupName="Group 5" />
				<Numbers groupName="Group 6" />
				<Numbers groupName="Group 7" />
				<Numbers groupName="Group 8" />
				<Numbers groupName="Group 9" />
				<Numbers groupName="Group 10" />
			</div>
		</div>
	);
};

export default Groups;
