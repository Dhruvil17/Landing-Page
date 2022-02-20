import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Heading.css";

const Heading = ({ buttonName }) => {
	return (
		<div className="heading">
			<ButtonGroup aria-label="Buttons">
				<div>
					<Button className="members-button" variant="success">
						{buttonName}
					</Button>
				</div>
			</ButtonGroup>
		</div>
	);
};

export default Heading;
