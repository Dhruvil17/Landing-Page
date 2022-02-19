import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Buttons.css";

const Buttons = () => {
	return (
		<div className="buttons">
			<div className="Home">
				<ButtonGroup aria-label="Buttons">
					<div>
						<Button className="button-1" variant="success">
							<i class="fa-solid fa-house"></i>Home
						</Button>
					</div>
				</ButtonGroup>
			</div>
			<div className="Groups">
				<ButtonGroup aria-label="Buttons">
					<div>
						<Button className="button-2" variant="light">
							<i class="fa-solid fa-compass"></i>Explore Groups
						</Button>
					</div>
				</ButtonGroup>
			</div>
		</div>
	);
};

export default Buttons;
