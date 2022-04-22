import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const TalleSlider = withStyles({
  root: {
    color: "#8E8E8E",
  },
  thumb: {
    height: 0,
    width: 0,
    backgroundColor: "#FFFFFF",
    border: "2px solid currentColor",
    marginTop: 0,
  },
  active: {},
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 7,
    borderRadius: 4,
    backgroundColor: "#FFFFFF",
    border: "1px solid #000000",
  },
})(Slider);

export default function CustomSlider() {
  return (
    <TalleSlider
      valueLabelDisplay="auto"
      aria-label="talleSlider"
      defaultValue={90}
    />
  );
}
