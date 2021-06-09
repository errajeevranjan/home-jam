import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import "./Circle.scss";
import { CustomTypography } from "./CustomTypography";
const Circle = ({ data }) => {
	const { icon, label, count, isActive } = data;
	console.log(icon, label, count, isActive);
	return (
		<Box
			display='flex'
			alignItems='center'
			justifyContent='center'
			className={isActive ? "circle active-circle" : "circle"}>
			<Grid
				className={isActive ? "cancel-transform" : null}
				container
				alignItems='center'
				alignContent='center'
				justify='center'
				direction='column'>
				<Grid item xs={12}>
					<img src={icon} alt='icon' />
				</Grid>
				<Grid item xs={12}>
					<Typography variant='h5' color='primary'>
						{count}
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<CustomTypography variant='subtitle2' color='primary'>
						{label}
					</CustomTypography>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Circle;
