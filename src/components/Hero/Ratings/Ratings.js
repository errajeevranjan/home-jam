import { Grid } from "@material-ui/core";
import React from "react";
import { CIRCLE_DATA } from "../../../constants/CircleData";
import Circle from "../../Common/Circle";
import "./Ratings.scss";
const Rating = () => {
	return (
		<div>
			<Grid container>
				{CIRCLE_DATA.map((data, index) => {
					return (
						<Grid item xs={3} key={index}>
							<Circle
								icon={data.icon}
								label={data.label}
								count={data.count}
							/>
						</Grid>
					);
				})}
			</Grid>
		</div>
	);
};

export default Rating;
