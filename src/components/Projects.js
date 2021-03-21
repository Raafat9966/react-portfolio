import "./Projects.css";
import digital from "../img/digital.jpg";
import breaking from "../img/breaking.jpg";
import game from "../img/game.jpg";
import card from "../img/card.jpg";
import grow from "../img/grow.jpg";
import food from "../img/food-api.jpg";

function Projects() {
	return (
		<div id="projects">
			<h1>Projects</h1>
			<section className="cards">
				<div className="card">
					<div className="card-inner">
						<div className="card-front">
							<img src={grow} alt="" />
						</div>
						<div className="card-back">
							<h1>projects1</h1>
							<ul>
								<li>
									<strong>Actor Name:</strong> stuff
								</li>
								<li>
									<strong>Nickname:</strong> stuff
								</li>
								<li>
									<strong>Birthday:</strong> stuff
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="card">
					<div className="card-inner">
						<div className="card-front">
							<img src={digital} alt="" />
						</div>
						<div className="card-back">
							<h1>projects1</h1>
							<ul>
								<li>
									<strong>Actor Name:</strong> stuff
								</li>
								<li>
									<strong>Nickname:</strong> stuff
								</li>
								<li>
									<strong>Birthday:</strong> stuff
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="card">
					<div className="card-inner">
						<div className="card-front">
							<img src={game} alt="" />
						</div>
						<div className="card-back">
							<h1>projects1</h1>
							<ul>
								<li>
									<strong>Actor Name:</strong> stuff
								</li>
								<li>
									<strong>Nickname:</strong> stuff
								</li>
								<li>
									<strong>Birthday:</strong> stuff
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="card">
					<div className="card-inner">
						<div className="card-front">
							<img src={breaking} alt="" />
						</div>
						<div className="card-back">
							<h1>projects1</h1>
							<ul>
								<li>
									<strong>Actor Name:</strong> stuff
								</li>
								<li>
									<strong>Nickname:</strong> stuff
								</li>
								<li>
									<strong>Birthday:</strong> stuff
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="card">
					<div className="card-inner">
						<div className="card-front">
							<img src={card} alt="" />
						</div>
						<div className="card-back">
							<h1>projects1</h1>
							<ul>
								<li>
									<strong>Actor Name:</strong> stuff
								</li>
								<li>
									<strong>Nickname:</strong> stuff
								</li>
								<li>
									<strong>Birthday:</strong> stuff
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="card">
					<div className="card-inner">
						<div className="card-front">
							<img src={food} alt="" />
						</div>
						<div className="card-back">
							<h1>projects1</h1>
							<ul>
								<li>
									<strong>Actor Name:</strong> stuff
								</li>
								<li>
									<strong>Nickname:</strong> stuff
								</li>
								<li>
									<strong>Birthday:</strong> stuff
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Projects;
