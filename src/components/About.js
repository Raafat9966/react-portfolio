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
						<h2 className="title">Skills</h2>
						<p className="copy">
							<strong>
								HTML, JavaScript, Nodejs, CSS, TypeScript,
								MongoDb, React, SASS, Bootstrap, Wordpress
							</strong>
						</p>
					</div>
				</div>
				<div className="about-card">
					<div className="content">
						<h2 className="title">Education</h2>
						<p className="copy">
							<strong>Baccalaureate Degree 2003</strong>
							<br />
							Baccalaureate Degree, Mathematics Profile.
							<br />
							<strong>
								Bachelor in Economics &Management 2007
							</strong>
							<br />
							Degree in Biasness Administration.
							<br />
							<strong>Full Stack Web Development 2021.</strong>
							<br />
							Font-end & Back-end Development.
						</p>
					</div>
				</div>
				<div className="about-card">
					<div className="content">
						<h2 className="title">Experience</h2>
						<p className="copy">
							<strong>Marketing Project Manager 2007</strong>
							<br />
							Responsible for the Marketing & Sales Department.
							<br />
							<strong>Client consultant 2018</strong>
							<br />
							Client consultant, money transfer, money exchange,
							budget, data entry, collaborating with Management
							Department. <br />
							<strong>Web Developer 2018</strong>
							<br />
							Freelancer - Web Developer.
							<br />
							<strong>Web Development Tutor 2020</strong> <br />
							Classes for Web-DEV students.
						</p>
					</div>
				</div>
				<div className="about-card">
					<div className="content">
						<h2 className="title">Vision</h2>
						<p className="copy">Going forward</p>
					</div>
				</div>
			</main>
		</div>
	);
}

export default About;
