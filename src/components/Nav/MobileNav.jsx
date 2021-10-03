import styled from "styled-components";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";

const MobileMenu = styled.div`
	height: ${(props) => (props.height ? "100%" : "0")};
	width: 100%;
	position: fixed;
	top: 0;
	/* transform: translateY(0); */
	right: 0;
	background: #1b1b1b;
	z-index: 100;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transition: all 1s;
`;

const Links = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
	font-size: 30px;

	li :hover {
	}
`;
const CloseIcon = styled(CloseOutline)`
	position: absolute;
	top: 35px;
	right: 35px;
	cursor: pointer;
`;
const MobileNav = (props) => {
	// const showMobileNavLinks = () => {
	//     setTimeout(()={
	//         return (
	//             	<>
	// 				<CloseIcon
	// 					size={40}
	// 					onClick={() => props.toggleMobileMenu(false)}
	// 				/>
	// 				<Links>
	// 					<li>Home</li>
	// 					<li>About</li>
	// 					<li>Experience</li>
	// 					<li>Contact</li>
	// 				</Links>
	// 			</>
	//         )
	//     },1000)
	// }
	return (
		<MobileMenu height={props.mobileMenu}>
			{props.mobileMenu && (
				<>
					<CloseIcon
						size={40}
						onClick={() => props.toggleMobileMenu(false)}
					/>
					<Links>
						<li>Home</li>
						<li>About</li>
						<li>Experience</li>
						<li>Contact</li>
					</Links>
				</>
			)}
		</MobileMenu>
	);
};
export default MobileNav;
