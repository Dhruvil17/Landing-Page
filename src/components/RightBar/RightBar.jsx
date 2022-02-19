import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./RightBar.css";

const RightBar = () => {
	return (
		<div className="login">
			<ButtonGroup aria-label="Buttons">
				<div>
					<Button className="button-t" variant="success">
						Login
					</Button>
				</div>
			</ButtonGroup>
		</div>
	);
};

export default RightBar;
