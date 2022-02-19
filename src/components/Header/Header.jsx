import React from "react";
import Image_1 from "../../Images/Image_1.png";
import "./Header.css";

const Header = ({ companyName }) => {
	return (
		<div className="Header">
			<div className="Header-Image">
				<img src={Image_1} alt="company-logo" width="40"></img>
			</div>
			<div className="Header-details">{companyName}</div>
			<hr className="line" />
		</div>
	);
};

export default Header;
