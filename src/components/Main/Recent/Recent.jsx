import React from "react";
import Name from "./Name/Name";
import Post from "./Post/Post";
import "./Recent.css";

const Recent = () => {
	return (
		<div className="all-posts">
			<Name />
			<Post
				heading="Heading/subject of the post"
				post="Name and designation of person posting - Type of post time of post"
			/>
			<Post
				heading="Heading/subject of the post"
				post="Name and designation of person posting - Type of post time of post"
			/>
		</div>
	);
};

export default Recent;
