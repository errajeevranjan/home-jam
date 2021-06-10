import { makeStyles } from "@material-ui/core/styles";
import { heroImage, heroImageMobile } from "../../assets";
export const heroComponentStyles = makeStyles((theme) => ({
	heroContainer: {
		minHeight: "100vh",
		backgroundImage: `url(${heroImage})`,
		// `url(${"../static/DSC_1037.jpg"})`
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		[theme.breakpoints.down("sm")]: {
			// objectFit: "cover",
			// objectPosition: "0% 0%",
			backgroundImage: `url(${heroImageMobile})`,
		},
	},
	ratings: {
		minHeight: " 100vh",
		width: "98.9vw",
		position: " absolute",
		background:
			"linear-gradient(180deg,rgba(5, 11, 20, 0.28) 0%,rgba(1, 13, 32, 0.69) 67.53%,#0a0b1a 85.33%)",
	},
	overlayContainer: {
		height: "100vh",
	},
}));
