import React from "react";
import "./Post.css";

const Post = ({ heading, post }) => {
	return (
		<div className="post">
			<i className="fa-solid fa-person"></i>
			<h4>{heading}</h4>
			<p>{post}</p>
			<div className="icons">
				<i className="fa-solid fa-thumbs-up">
					<span>9</span>
				</i>
				<i className="fa-solid fa-comment">
					<span>9</span>
				</i>
			</div>
			<br />
			<div className="break">
				<hr />
			</div>
		</div>
	);
};

export default Post;
