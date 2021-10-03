import styled from "styled-components";
import Mountain from "../../assets/img/mountain.jpg";
import Mountain1 from "../../assets/img/mountain1.png";

const AboutSection = styled.section`
	display: flex;
	justify-content: space-between;
	height: 600px;
	margin-top: -150px;
	/* padding: 20px; */
	position: relative;
	/* background-image: url(${Mountain1});
	background-position: center;
	background-size: cover; */
	/* &:before {
		content: "";
		position: absolute;
		z-index: -1;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		opacity: 0.4;
		background-image: url(${Mountain});
		background-position: center;
		background-size: cover;
	} */
	p {
		font-size: 14px;
		max-width: 300px;
		width: auto;
		line-height: 25px;
		/* z-index: 5; */
	}
	.about-start {
		margin-left: 10%;
		z-index: 5;
	}
	.about-center {
		text-align: justify;
		align-self: center;
		z-index: 5;
		/* z-index: 5; */
	}
	.about-end {
		text-align: end;
		margin-right: 10%;
		align-self: end;
		z-index: 5;
		/* z-index: 5; */
	}
	/* .bg-img {
		position: absolute;
		width: 100%;
		bottom: 0;
		z-index: 0; */
	/* margin-right: ; */
	img {
		z-index: 0;
		position: absolute;
		width: 100%;

		opacity: 0.2;
		top: 90px;
	}

	@media only screen and (max-width: 780px) {
		height: auto;
		flex-direction: column;
		justify-content: center;
		margin-top: 20px;
		align-items: center;
		p {
			background: #e0e3d0;
			color: black;
			padding: 20px;
			border-radius: 20px;
			margin: 10px 0;
		}
		.about-start {
			text-align: center;
			margin: 0;
		}
		.about-center {
			text-align: center;
			margin: 0;
		}
		.about-end {
			text-align: center;
			margin: 0;
			align-self: center;
		}
	}
`;
const About = () => {
	return (
		<AboutSection>
			<div className="about-start">
				<p>
					Brandon is a results-driven communications leader, who has
					extensive experience helping companies and senior executives
					craft and execute communications strategies that help them
					own unique positions in crowded and competitive markets.
				</p>
			</div>
			<div className="about-center">
				<p>
					Brandon is a results-driven communications leader, who has
					extensive experience helping companies and senior executives
					craft and execute communications strategies that help them
					own unique positions in crowded and competitive markets.
				</p>
			</div>
			<div className="about-end">
				<p>
					Brandon is a results-driven communications leader, who has
					extensive experience helping companies and senior executives
					craft and execute communications strategies that help them
					own unique positions in crowded and competitive markets.
				</p>
			</div>
			{/* <div className="bg-img"> */}
			<img src={Mountain} alt="background mountain" />
			{/* </div> */}
		</AboutSection>
	);
};

export default About;
