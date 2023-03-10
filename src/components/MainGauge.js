import { Height } from "@material-ui/icons";
import GaugeChart from "react-gauge-chart";
import classes from "./css/MainGauge.module.css";
function MainGauge(props) {
  const percent = props.currentVal / props.maxVal;
  const outpercent = Math.round(percent * 100);
  return (
    <div className={classes.allarea}>
      <h2 className={classes.title}>{props.title}</h2>
      <div className={classes.gauge}>
        <GaugeChart
          id={props.id}
          animate={false}
          /*nrOfLevels={10}*/ /*default area gauge sama rata*/
          percent={percent}
          colors={["#ff0000", "#ffdd00", "#008000"]}
          hideText={true}
          arcWidth={0.35}
          cornerRadius={4}
          arcsLength={[0.5, 0.3, 0.2]} /*custome asymetris area gauge*/
          arcPadding={0.02}
          needleBaseColor={"#2b2d42"}
          needleColor={"#2b2d42"}
          style={{ width: 600 }}
        />
      </div>

      <div className={classes.percent}>{outpercent}%</div>
    </div>
  );
}
export default MainGauge;
