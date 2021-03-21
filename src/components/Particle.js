import Particles from "react-tsparticles";

function Particle() {
	return (
		<Particles
			id="tsparticles"
			options={{
				background: {
					color: {
						value: "#4d00d1",
					},
				},
				fpsLimit: 90,
				interactivity: {
					detectsOn: "canvas",
					events: {
						onClick: {
							enable: true,
							mode: "push",
						},
						onHover: {
							enable: true,
							mode: "repulse",
						},
						resize: true,
					},
					modes: {
						bubble: {
							distance: 100,
							duration: 2,
							opacity: 0.8,
							size: 40,
						},
						push: {
							quantity: 4,
						},
						repulse: {
							distance: 100,
							duration: 0.4,
						},
					},
				},
				particles: {
					color: {
						value: "#b3b3b3",
					},
					links: {
						color: "#b3b3b3",
						distance: 200,
						enable: true,
						opacity: 0.2,
						width: 3,
					},
					collisions: {
						enable: true,
					},
					move: {
						direction: "none",
						enable: true,
						outMode: "bounce",
						random: false,
						speed: 6,
						straight: false,
					},
					number: {
						density: {
							enable: true,
							value_area: 700,
						},
						value: 80,
					},
					opacity: {
						value: 0.5,
					},
					shape: {
						type: "circle",
					},
					size: {
						random: true,
						value: 5,
					},
				},
				detectRetina: true,
			}}
		/>
	);
}
export default Particle;
