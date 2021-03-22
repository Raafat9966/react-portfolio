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
							<h1>Budget App</h1>
							<ul>
								<li>
									<strong>Description:</strong> Application to
									calculate the expenses and incomes.
								</li>
								<li>
									<strong>technics used:</strong> Vanilla
									JavaScript Classes, CSS and HTML.
								</li>
								<li>
									<a
										className="link"
										href="https://github.com/Raafat9966/Budget-App"
										target="blank"
									>
										code
									</a>
									<a
										className="link"
										href="https://raafat9966.github.io/Budget-App/"
										target="blank"
									>
										website
									</a>
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
							<h1>Exchange Rate App</h1>
							<ul>
								<li>
									<strong>Description:</strong> Application to
									Exchange currency using real time API, Fetch
									Data from https://api.exchangerate-api.com,
									display the values for both countries,
									update values on amount change, swap country
									rates.
								</li>
								<li>
									<strong>technics used:</strong> Vanilla
									JavaScript DOM, CSS and HTML.
								</li>
								<li>
									<a
										className="link"
										href="https://github.com/Raafat9966/Exchange_rate_app"
										target="blank"
									>
										code
									</a>
									<a
										className="link"
										href="https://raafat9966.github.io/Exchange_rate_app/"
										target="blank"
									>
										website
									</a>
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
							<h1>Speed typing game</h1>
							<ul>
								<li>
									<strong>Description:</strong> Game to beat
									the clock by typing random words, Create
									game UI including a difficulty setting,
									Generate random word and place in DOM, Score
									increase after word is typed, Implement
									timer, Store difficulty setting in local
									storage,
								</li>
								<li>
									<strong>technics used:</strong> Vanilla
									JavaScript DOM, CSS and HTML.
								</li>
								<li>
									<a
										className="link"
										href="https://github.com/Raafat9966/speed-typing-game"
										target="blank"
									>
										code
									</a>
									<a
										className="link"
										href="https://raafat9966.github.io/speed-typing-game/"
										target="blank"
									>
										website
									</a>
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
							<h1>Breaking bad API</h1>
							<ul>
								<li>
									<strong>Description:</strong> Website to
									fetch for https://breakingbadapi.com/ API,
									and show the data in cards.
								</li>
								<li>
									<strong>technics used:</strong> React Hooks
									and axios.
								</li>
								<li>
									<a
										className="link"
										href="https://github.com/Raafat9966/react-breaking-bad-API"
										target="blank"
									>
										code
									</a>
									<a
										className="link"
										href="https://raafat9966.github.io/react-breaking-bad-API/"
										target="blank"
									>
										website
									</a>
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
							<h1>Quiz App</h1>
							<ul>
								<li>
									<strong>Description:</strong> Application
									using https://opentdb.com API, Interface
									creating 10 questions and recording the
									score for the user and save it in the local
									storage with name to check for the higher
									score.
								</li>
								<li>
									<strong>technics used:</strong> Vanilla
									JavaScript DOM, fetch API, CSS and HTML.
								</li>
								<li>
									<a
										className="link"
										href="https://github.com/Raafat9966/quiz-app"
										target="blank"
									>
										code
									</a>
									<a
										className="link"
										href="https://raafat9966.github.io/quiz-app/"
										target="blank"
									>
										website
									</a>
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
							<h1>Food API app</h1>
							<ul>
								<li>
									<strong>Description:</strong> Application
									for food searching from API
								</li>
								<li>
									<strong>technics used:</strong> Vanilla
									JavaScript DOM, fetch API, CSS and HTML.
								</li>
								<li>
									<a
										className="link"
										href="https://github.com/Raafat9966/Food-API"
										target="blank"
									>
										code
									</a>
									<a
										className="link"
										href="https://raafat9966.github.io/Food-API/"
										target="blank"
									>
										website
									</a>
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
