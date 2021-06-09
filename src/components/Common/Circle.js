import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import "./Circle.scss";
import { CustomTypography } from "./CustomTypography";
const Circle = (props) => {
	const { icon, label, count } = props;
	console.log(icon, label, count);
	return (
		<Box
			display='flex'
			alignItems='center'
			justifyContent='center'
			className='circle'>
			<Grid
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
