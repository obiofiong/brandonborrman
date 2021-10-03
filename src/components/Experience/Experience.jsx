import React from "react";
import styled from "styled-components";
import ExperienceCard from "./ExperienceCard";
import Twitter from "../../assets/img/twitter.jpg";
import Ancestry from "../../assets/img/ancestry.png";
import Quantcast from "../../assets/img/quantcast.png";
// import Twitter from "../../assets/img/twitter.jpg";

const ExperienceContainer = styled.section`
	position: relative;
	/* height: 1000px; */
	margin-top: 80px;
	background: #000000;
	padding: 60px 30px;
	z-index: 5;
	/* gap: 20px; */
	.next {
		background: white;
		color: black;
		position: absolute;
		height: 40px;
		width: 40px;
		z-index: 7;
		top: 50%;
		right: 10px;
	}

	.previous {
		background: white;
		color: black;
		position: absolute;
		height: 40px;
		width: 40px;
		z-index: 7;
		top: 50%;
	}
	.scrollable {
		position: relative;
		display: flex;
		align-items: center;

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
		&::-webkit-scrollbar:horizontal {
			height: 8px;
			background-color: #1b1b1b;
		}
		&::-webkit-scrollbar-thumb:horizontal {
			background: gray;
			border-radius: 10px;
		}
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
			color: "#1b1b1b",
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
	// const [slideIndex, setSlideIndex] = React.useState(0);
	return (
		<ExperienceContainer>
			{/* <span className="next">Next</span> */}
			{/* <span className="previous">Previous</span> */}
			<div className="scrollable">
				{experiences.map((experience) => {
					return (
						<ExperienceCard
							key={experience.id}
							experience={experience}
						/>
					);
				})}
			</div>
			{/* <ExperienceCard />
			<ExperienceCard />
			<ExperienceCard />
			<ExperienceCard />
			<ExperienceCard /> */}
		</ExperienceContainer>
	);
};

export default Experience;
