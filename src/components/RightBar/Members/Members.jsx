import React from "react";
import Heading from "./Heading/Heading";
import Person from "./Person/Person";
import "./Members.css";

const Members = () => {
	return (
		<div className="member">
			<Heading buttonName="Members No of members" />
			<div className="all-persons">
				<Person personName="Person 1" />
				<Person personName="Person 2" />
				<Person personName="Person 3" />
				<Person personName="Person 4" />
			</div>
		</div>
	);
};

export default Members;
