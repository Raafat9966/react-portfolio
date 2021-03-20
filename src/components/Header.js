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
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/">About</a>
					</li>
					<li>
						<a href="/">Contact</a>
					</li>
					<li>
						<a href="/">Projects</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Header;
