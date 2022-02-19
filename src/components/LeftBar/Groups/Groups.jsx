import React from "react";
import Names from "./Names/Names";
import Numbers from "./Numbers/Numbers";

const Groups = () => {
	return (
		<div>
			<Names />
			<Numbers groupName="Group 1" />
			<Numbers groupName="Group 2" />
			<Numbers groupName="Group 3" />
			<Numbers groupName="Group 4" />
			<Numbers groupName="Group 5" />
			<Numbers groupName="Group 6" />
			<Numbers groupName="Group 7" />
			<Numbers groupName="Group 8" />
		</div>
	);
};

export default Groups;
