import styled from "styled-components";

const SkillsContainer = styled.section`
	background: #e5e5e5;
	color: black;
	height: 100px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	p {
		letter-spacing: 2px;
		width: 150px;
		text-align: center;
		line-height: 24px;
	}
	@media only screen and (max-width: 780px) {
		flex-wrap: wrap;
		gap: 20px;
		padding: 30px;
		height: auto;
		font-size: 14px;
	}
`;
const Skills = () => {
	return (
		<SkillsContainer>
			<p>Crisis Communication</p>
			<p>Communications Planning</p>
			<p>Cooperate Communications</p>
			<p>Public Relations</p>
		</SkillsContainer>
	);
};

export default Skills;
