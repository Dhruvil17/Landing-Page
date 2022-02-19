import React from "react";
import "./Post.css";

const Post = ({ heading, post }) => {
	return (
		<div className="post">
			<i class="fa-solid fa-person"></i>
			<h4>{heading}</h4>
			<p>{post}</p>
			<div>
				<i class="fa-solid fa-thumbs-up"> 9</i>
				<i class="fa-solid fa-comment"> 6</i>
			</div>
			<br />
			<div className="break">
				<hr />
			</div>
		</div>
	);
};

export default Post;
