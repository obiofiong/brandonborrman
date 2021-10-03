import { motion } from "framer-motion";
import styled from "styled-components";
import Profile from "../../assets/img/brandon.jpg";

const HeroSection = styled.div`
	height: 80vh;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 10%;
	flex-wrap: wrap-reverse;
	img {
		border-radius: 50%;
		height: 250px;
		z-index: 5;
	}
	p {
		font-size: 10px;
		margin-bottom: 10px;
		letter-spacing: 5px;
	}
	.left-design {
		position: absolute;
		height: 120px;
		width: 80px;
		background-color: #655d5a;
		border-radius: 15px;
		left: -10px;
		opacity: 0.46;
		animation: 1s infinite alternate slideBackandForth;
		/* top: 45%; */
		/* transform: translateY(-50%); */
	}
	.name {
		width: 250px;
		letter-spacing: 20px;
		font-family: "Sorts Mill Goudy", serif;
		font-size: 35px;
		font-weight: 200;
	}

	@keyframes slideBackandForth {
		from {
			width: 80px;
		}
		to {
			width: 90px;
		}
	}
	@media only screen and (max-width: 480px) {
		.name {
			font-size: 28px;
		}
	}
`;
const Hero = () => {
	// const { scrollYProgress } = useViewportScroll();
	// const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

	// return (
	//   <motion.div
	//     style={{ scale }}
	//   >
	//     <motion.div
	//       style={{
	//         scaleY: scrollYProgress
	//       }}
	//     />
	//   </motion.div>
	// )
	return (
		<HeroSection>
			<div className="left-design"></div>
			<div>
				<p>I am</p>
				<h1 className="name">BRANDON BORRMAN</h1>
			</div>
			<motion.img
				initial={{ scale: 0, rotate: -45 }}
				animate={{ rotate: 0, scale: 1 }}
				whileHover={{ scale: 1.2, rotate: 3 }}
				whileTap={{
					scale: 0.8,
					rotate: -5,
					borderRadius: "100%",
				}}
				src={Profile}
				alt="profile"
			/>
		</HeroSection>
	);
};

export default Hero;
