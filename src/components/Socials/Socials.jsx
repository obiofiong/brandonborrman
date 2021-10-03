import styled from "styled-components";
import { Twitter } from "@styled-icons/boxicons-logos/Twitter";
import { FacebookCircle } from "@styled-icons/boxicons-logos/FacebookCircle";
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";

const SocialsContainer = styled.section`
	height: 200px;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	background: linear-gradient(180deg, #000000 0%, #171717 100%);
	.social-icons {
		display: flex;
		gap: 20px;
	}
	@media screen and (max-width: 480px) {
		flex-direction: column;
	}
`;
const Socials = () => {
	return (
		<SocialsContainer>
			<div>Brandon Borrman</div>
			<div className="social-icons">
				<Twitter size={40} color="white" />
				<FacebookCircle size={40} color="white" />
				<LinkedinSquare size={40} color="white" />
			</div>
		</SocialsContainer>
	);
};

export default Socials;
