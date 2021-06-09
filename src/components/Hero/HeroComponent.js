import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { CustomTypography } from "../Common/CustomTypography";
import "./HeroComponent.scss";
import Ratings from "./Ratings/Ratings";
const HeroComponent = () => {
	return (
		<div className='hero-container'>
			<div className='ratings'>
				<Container>
					<Grid
						className='overlay-container'
						container
						justify='center'
						alignItems='flex-end'>
						<Grid container item xs={12} spacing={4}>
							<Grid item xs={12}>
								<Typography variant='h1' color='primary'>
									Cari Cari
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<CustomTypography variant='h6' color='primary'>
									Live from their sofa to yours. Get closer to
									your favorite <br />
									artists, and never miss out.
								</CustomTypography>
							</Grid>
						</Grid>
						<Grid item xs={12}>
							<Ratings />
						</Grid>
					</Grid>
				</Container>
			</div>
		</div>
	);
};

export default HeroComponent;
