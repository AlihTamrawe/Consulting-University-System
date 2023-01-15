import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageCard from "./ImageCard";
import places from "../static/places";
import useWindowPosition from "../hooks/useWindowPosition";
import ModeCommentIcon from "@mui/icons-material/ModeComment";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "50vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
}));
const PlaceToVisit = (props) => {
  const { three, loaded } = props;
  const classes = useStyles();
  const checked = useWindowPosition("header");
  return (
    <div>
      {/* {loaded && */}
      {/* three.map((post) => { */}
      {/* return ( */}
      <div className={classes.root} id="place-to-visit">
        <ImageCard post={three[0]} place={places[2]} checked={checked} />
        <ImageCard post={three[1]} place={places[1]} checked={checked} />
        <ImageCard post={three[2]} place={places[0]} checked={checked} />
      </div>
      {/* ); */}
      {/* })} */}
    </div>
  );
};
export default PlaceToVisit;
