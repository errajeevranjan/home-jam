import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles({
	root: {
		// margin: "1rem 0 1rem 0",
		backgroundColor: "#111229",
		width: 268,
		height: 387,
		// boxShadow: "linear-gradient(163.41deg, #301A68 0.11%, #234C97 170.69%)",
		borderRadius: ".5rem",
		// boxShadow:
		// 	"0px 4px 16px linear-gradient(163.41deg, #301A68 0.11%, #234C97 170.69%)",
		//     -webkit-box-shadow: '10px -8px 5px 8px rgba(204,237,215,1)';
		// -moz-box-shadow: '10px -8px 5px 8px rgba(204,237,215,1)';
		boxShadow: "5px -5px 1px 1px rgb(48,26,104)",

		// //
	},
	media: {
		height: 230,
	},
	flag: {
		width: "80px",
		height: "20px",
		color: "#682F26",

		fontWeight: 500,

		backgroundColor: "#E5C558",
	},
});
