import React from "react";
import Header from "../Header/Header";
import LeftBar from "../LeftBar/LeftBar";
import Main from "../Main/Main";
import RightBar from "../RightBar/RightBar";
import "./App.css";

const App = () => {
	return (
		<div>
			<Header companyName="CareerNaksha" />
			<div className="workspace">
				<LeftBar />
				<Main />
				<RightBar />
			</div>
		</div>
	);
};

export default App;
