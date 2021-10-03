// import React, { useState } from "React";
import { useState } from "react";
import styled from "styled-components";
import MobileNav from "./MobileNav";
import { MenuAltRight } from "@styled-icons/boxicons-regular/MenuAltRight";

const NavbarContainer = styled.div`
	display: flex;
	/* justify-content: start; */
	align-items: center;
	padding: 40px 30px 20px;
	/* margin-top: 20px; */
	background: #1b1b1b;
	color: white;
	gap: 25%;
	@media only screen and (max-width: 780px) {
		justify-content: space-between;
		padding: 40px 20px 20px;
	}
`;
const Logo = styled.div`
	/* font-size: 20px; */
`;
const Links = styled.ul`
	list-style: none;
	display: flex;
	justify-content: center;
	gap: 20px;
	@media only screen and (max-width: 780px) {
		display: none;
	}
`;
const MenuIcon = styled(MenuAltRight)`
	display: none;
	size: 15px;
	@media only screen and (max-width: 780px) {
		display: block;
	}
`;

const Navbar = () => {
	const [mobileMenu, toggleMobileMenu] = useState(false);
	return (
		<>
			<NavbarContainer>
				<Logo>Brandon Borrman</Logo>
				<Links>
					<li>Home</li>
					<li>About</li>
					<li>Experience</li>
					<li>Contact</li>
				</Links>
				{/* <MenuAltRight /> */}
				<MenuIcon
					size={24}
					onClick={() => {
						toggleMobileMenu(!mobileMenu);
					}}
				/>
			</NavbarContainer>
			{/* {mobileMenu &&  */}
			<MobileNav
				mobileMenu={mobileMenu}
				toggleMobileMenu={toggleMobileMenu}
			/>
			{/* } */}
		</>
	);
};

export default Navbar;
