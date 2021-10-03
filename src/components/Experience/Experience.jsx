import styled from "styled-components";
import ExperienceCard from "./ExperienceCard";
import Twitter from "../../assets/img/twitter.jpg";
import Ancestry from "../../assets/img/ancestry.png";
import Quantcast from "../../assets/img/quantcast.png";
// import Twitter from "../../assets/img/twitter.jpg";

const ExperienceContainer = styled.section`
	/* height: 1000px; */
	display: flex;
	align-items: center;
	margin-top: 80px;
	background: #000000;
	padding: 60px 30px;
	z-index: 5;
	/* gap: 20px; */
	overflow-x: scroll;

	&::-webkit-scrollbar {
		width: 0.5em;
	}

	&::-webkit-scrollbar-track {
		box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
	}

	&::-webkit-scrollbar-thumb {
		background-color: darkgrey;
		outline: 1px solid slategrey;
	}
`;
const Experience = () => {
	const experiences = [
		{
			id: 1,
			position: "Advisor",
			company: "The Franklin Project",
			duration: "June 2021 - PRESENT",
			color: "#0f2148",
			// logo: "",
		},
		{
			id: 2,
			position: "VICE PRESIDENT, GLOBAL COMMUNICATIONS",
			company: "Twitter",
			duration: "FEB 2018 - JUNE 2021",
			color: "#0E629A",
			logo: Twitter,
		},
		{
			id: 3,
			position: "VICE PRESIDENT, GLOBAL COMMUNICATIONS",
			company: "Ancestry",
			duration: "FEB 2016 - FEB 2018",
			color: "#9BC03C",
			logo: Ancestry,
		},
		{
			id: 4,
			position: "HEAD OF COMMUNICATIONS",
			company: "Quantcast",
			duration: "FEB 2016 - FEB 2018",
			color: "#000000",
			logo: Quantcast,
		},
		{
			id: 5,
			position: "Advisor",
			company: "The Franklin Project",
			duration: "June 2021 - PRESENT",
			color: "#0f2148",
			// logo: "",
		},
		{
			id: 6,
			position: "VICE PRESIDENT, GLOBAL COMMUNICATIONS",
			company: "Twitter",
			duration: "FEB 2018 - JUNE 2021",
			color: "#0E629A",
			logo: Twitter,
		},
	];
	return (
		<ExperienceContainer>
			{experiences.map((experience) => {
				return (
					<ExperienceCard
						key={experience.id}
						experience={experience}
					/>
				);
			})}
			{/* <ExperienceCard />
			<ExperienceCard />
			<ExperienceCard />
			<ExperienceCard />
			<ExperienceCard /> */}
		</ExperienceContainer>
	);
};

export default Experience;
