// React Required
import React, { Component } from "react";
import ReactDOM from "react-dom";

// Create Import File
import "./index.css";
import HomeHorizontal from "./HomeHorizontal";
import * as serviceWorker from "./serviceWorker";

class Root extends Component {
	render() {
		return <HomeHorizontal />;
	}
}

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.register();
