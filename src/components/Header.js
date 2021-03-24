import { Link } from "react-scroll";
import logo from "../img/logo.png";
import "./Header.css";

function Header() {
	return (
		<div>
			<nav>
				<div className="logo">
					<img src={logo} alt="logo" />
				</div>
				<input type="checkbox" id="click" />
				<label htmlFor="click" className="menu-btn">
					{/* <i className="fas fa-bars"></i> */}
					<i class="fas fa-angle-double-right"></i>
				</label>
				<ul>
					<li>
						<Link
							activeClass="active"
							to="main"
							smooth={true}
							duration={1000}
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							to="projects"
							smooth={true}
							duration={1000}
							activeClass="active"
						>
							Projects
						</Link>
					</li>
					<li>
						<Link
							to="about"
							smooth={true}
							duration={1000}
							activeClass="active"
						>
							About
						</Link>
					</li>

					<li>
						<a href="/">Contact</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Header;
