import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Grid,
	IconButton,
	Link,
	Typography,
} from "@material-ui/core";
import React from "react";
import { arrowIcon, ticketIcon } from "../../assets";
import { CustomTypography } from "./CustomTypography";
// import "./ShowsCard.scss";
import { useStyles } from "./ShowsCardStyles";
const ShowsCard = ({ data }) => {
	const classes = useStyles();

	const { picture, name, flag, info } = data;
	return (
		<Card className={classes.root}>
			<CardMedia className={classes.media} image={picture} title={name} />
			<CardContent>
				<Box mb={4}>
					<Box
						className={classes.flag}
						display='flex'
						justifyContent='center'
						alignItems='center'>
						<CustomTypography variant='subtitle2'>
							{flag}
						</CustomTypography>
					</Box>
					<Box mt={2}>
						<Typography
							gutterBottom
							variant='h5'
							component='h2'
							color='primary'>
							{name}
						</Typography>
					</Box>
				</Box>
				{/* Actions */}
				<Grid container justify='space-between' alignItems='center'>
					<Grid item>
						<Link href={info} color='primary'>
							<CustomTypography
								variant='subtitle1'
								color='primary'>
								<Box display='flex'>
									<Box>More info</Box>
									<Box ml={2}>
										<img src={arrowIcon} alt='arrow icon' />
									</Box>
								</Box>
							</CustomTypography>
						</Link>
					</Grid>
					<Grid item>
						<IconButton size='small' color='primary'>
							<img src={ticketIcon} alt='ticket icon' />
						</IconButton>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};

export default ShowsCard;
