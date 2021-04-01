import Typed from "react-typed";
import Particle from "./Particle";
import "./Main.css";
function Main() {
	return (
		<div id="main" className="main">
			<Particle />
			<div className="header">
				<h3>
					<span>Hey,</span> I'm Raafat Basheer
				</h3>
				<h5>
					Full Stack & Interface Developer.
					<br />
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
						typeSpeed={60}
						backSpeed={30}
						loop
					/>
				</h5>
			</div>
		</div>
	);
}

export default Main;
