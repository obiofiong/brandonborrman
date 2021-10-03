import styled from "styled-components";

const FooterContainer = styled.section`
	height: 120px;
	text-align: center;
	padding: 20px;
	font-size: 14px;
`;
const Footer = () => {
	return (
		<FooterContainer>
			<p>Copyright 2021</p>
			<p>Developed by John Obiofiong</p>
		</FooterContainer>
	);
};

export default Footer;
