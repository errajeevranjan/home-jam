import { AppBar, Container, Grid, IconButton } from "@material-ui/core";
import React from "react";
import {
	basketIcon,
	hamburgerIcon,
	homeJamLogo,
	searchIcon,
} from "../../assets";
import { CustomTypography } from "../Common/CustomTypography";
const NavbarMobile = () => {
	return (
		<AppBar color='transparent' elevation={0}>
			<Container>
				<Grid container justify='space-between'>
					<Grid item xs={3}>
						<img src={homeJamLogo} alt='homejam logo' />
					</Grid>
					<Grid
						container
						item
						xs={6}
						justify='flex-end'
						alignItems='center'
						spacing={8}>
						<Grid item>
							<CustomTypography
								variant='subtitle2'
								color='primary'>
								<img src={searchIcon} alt='search icon' />
							</CustomTypography>
						</Grid>

						<Grid item>
							<img src={basketIcon} alt='basket icon' />{" "}
						</Grid>
						<Grid item>
							<IconButton
								color='primary'
								aria-label='open nav menu'
								onClick={(e) => console.log("u clicked")}>
								<img src={hamburgerIcon} alt='hamburger icon' />
							</IconButton>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</AppBar>
	);
};

export default NavbarMobile;
