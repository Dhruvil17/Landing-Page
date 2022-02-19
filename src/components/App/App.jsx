import React from "react";
import Header from "../Header/Header";
import LeftBar from "../LeftBar/LeftBar";
import Main from "../Main/Main";
import "./App.css";

const App = () => {
	return (
		<div>
			<Header companyName="CareerNaksha" />
			<div className="workspace">
				<LeftBar />
				<Main />
			</div>
		</div>
	);
};

export default App;
