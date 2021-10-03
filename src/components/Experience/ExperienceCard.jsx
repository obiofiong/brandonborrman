import { motion } from "framer-motion";
import styled from "styled-components";
import { Building } from "@styled-icons/bootstrap/Building";
// import Twitter from "../../assets/img/twitter.jpg";

const Card = styled.div`
	position: relative;
	height: 280px;
	min-width: 300px;
	border-radius: 10px;
	background: ${(props) => props.bg};
	z-index: 5;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-direction: column;
	margin: 0 20px;
	&:before {
		content: "";
		height: 50px;
		width: 50px;
		background-color: black;
		/* border-radius: 5px; */
		opacity: 0.5;
		position: absolute;
		bottom: 0;
		left: 0;
	}
	&:after {
		content: "";
		height: 50px;
		width: 50px;
		background-color: #975252;
		/* border-radius: 5px; */

		opacity: 0.5;
		position: absolute;
		right: 0;
		top: 0;
	}
	.company {
		display: flex;
		align-items: center;
		z-index: 5;
		gap: 10px;
		img {
			height: 80px;
			border-radius: 10px;
		}
	}
	h4 {
		letter-spacing: 3px;
		font-weight: 100;
		font-size: 12px;
		text-align: center;
	}
	@media only screen and (max-width: 780px) {
		min-width: 240px;
	}
`;
const BuildingIcon = styled(Building)`
	position: absolute;
	opacity: 0.1;
	top: 50%;
	transform: translateY(-50%);
`;
const ExperienceCard = ({ experience }) => {
	return (
		<motion.div>
			<Card bg={experience.color}>
				<h4>{experience.position}</h4>
				<div className="company">
					{experience.logo ? (
						<img src={experience.logo} alt="twitter" />
					) : null}
					<p>{experience.company}</p>
				</div>
				<p>{experience.duration}</p>
				<BuildingIcon size={150} color="gray" />
			</Card>
		</motion.div>
	);
};

export default ExperienceCard;
