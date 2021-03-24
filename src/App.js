import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";

import Projects from "./components/Projects";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Header />
			<Main />
			<Projects />
			<About />
		</div>
	);
}

export default App;
