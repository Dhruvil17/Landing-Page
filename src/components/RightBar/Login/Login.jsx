import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";

const Login = ({ buttonName }) => {
	return (
		<div className="login">
			<ButtonGroup aria-label="Buttons">
				<div>
					<Button className="login-button" variant="success">
						{buttonName}
					</Button>
				</div>
			</ButtonGroup>
		</div>
	);
};

export default Login;
