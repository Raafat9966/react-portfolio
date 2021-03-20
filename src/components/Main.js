import Typed from "react-typed";
import "./Main.css";
function Main() {
	return (
		<div className="main">
			<h3>
				<span>Hey,</span> I'm Raafat Basheer
			</h3>
			<h5>Full Stack & Interface Developer.</h5>
			<Typed
				strings={[
					"JavaScript",
					"Node.js",
					"FrontEnd",
					"BackEnd",
					"React",
					"MongoDB",
					"Bootstrap",
				]}
				typeSpeed={70}
				backSpeed={70}
				loop
			/>
		</div>
	);
}

export default Main;
