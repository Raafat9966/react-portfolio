import "./About.css";
function About() {
	return (
		<div id="about">
			<h3>About me</h3>
			<h1>
				Education, passion, with a spice of experience can lead to great
				work and can unleash creativity
			</h1>
			<main className="page-content">
				<div className="about-card">
					<div className="content">
						<h2 className="title">Frontend</h2>
						<p className="copy">
							<strong>
								HTML, CSS, ES6+, TypeScript, React, SASS,
								Bootstrap
							</strong>
						</p>
					</div>
				</div>
				<div className="about-card">
					<div className="content">
						<h2 className="title">Backend</h2>
						<p className="copy">
							<strong>MongoDb, Express, Mongoose</strong>
						</p>
					</div>
				</div>
				<div className="about-card">
					<div className="content">
						<h2 className="title">Full Stack</h2>
						<p className="copy">
							<strong>Nodejs, TypeScript, JavaScript, Git</strong>
						</p>
					</div>
				</div>
				<div className="about-card">
					<div className="content">
						<h2 className="title">UI</h2>
						<p className="copy">
							<strong>Jquery, SASS, Bootstrap, Wordpress</strong>
						</p>
					</div>
				</div>
			</main>
		</div>
	);
}

export default About;
