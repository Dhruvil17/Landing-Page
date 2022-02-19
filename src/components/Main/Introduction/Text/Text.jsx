import React from "react";
import Image_2 from "../../../../Images/Image_2.png";
import "./Text.css";

const Text = () => {
	return (
		<div>
			<div className="paragraph">
				<p>
					Firstly, Head over to our website
					<a
						className="link"
						href="https://careernaksha.com/"
						alt="website"
						target="_blank"
						rel="noreferrer"
					>
						careernaksha.com
					</a>
					, and join the CareerNaksha Community. Upon joining explore and
					understand all the facilities that we are providing.
				</p>
			</div>
			<div className="image">
				<img src={Image_2} alt="company" height="200"></img>
			</div>
			<div className="footer">
				<a
					className="Link"
					href="https://careernaksha.com/"
					target="_blank"
					rel="noreferrer"
				>
					Posts
				</a>
				<a
					className="Link"
					href="https://careernaksha.com/"
					target="_blank"
					rel="noreferrer"
				>
					Groups
				</a>
			</div>
		</div>
	);
};

export default Text;
