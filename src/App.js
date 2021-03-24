import Header from "./components/Header";
import Main from "./components/Main";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";

import "./App.css";

function App() {
	return (
		<div className="App">
			<Header />
			<Main />
			<Projects />
			<About />
			<Footer />
		</div>
	);
}

export default App;
