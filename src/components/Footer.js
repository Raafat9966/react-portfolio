import "./Footer.css";

function Footer() {
	return (
		<div id="contact">
			<section id="contact" className="contact-section">
				<div className="contact-section-header">
					<h2>If you are interested to work with me</h2>
					<p>Here where you can find me...</p>
				</div>
				<div className="contact-links">
					<a
						href="https://www.facebook.com/raafat.basheer"
						target="blank"
						className="btn contact-details"
					>
						<i className="fab fa-facebook-square"></i> Facebook
					</a>
					<a
						id="profile-link"
						href="https://github.com/Raafat9966"
						target="blank"
						className="btn contact-details"
					>
						<i className="fab fa-github"></i> GitHub
					</a>
					<a
						href="https://www.linkedin.com/in/raafat-basheer-713a00a4/"
						target="blank"
						className="btn contact-details"
					>
						<i className="fab fa-linkedin"></i> LinkedIn
					</a>
					<a
						href="mailto:raafat.basheer@yahoo.com"
						className="btn contact-details"
					>
						<i className="fas fa-at"></i> Email
					</a>
					<a
						href="tel:+4915738312155"
						className="btn contact-details"
					>
						<i className="fas fa-mobile-alt"></i> Call me
					</a>
				</div>
			</section>

			<footer>
				<p>&copy; Created by Raafat basheer</p>
			</footer>
		</div>
	);
}

export default Footer;
