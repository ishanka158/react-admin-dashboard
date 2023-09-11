import {Link} from "react-router-dom";
import "./chartBox.scss";
import { ResponsiveContainer, LineChart, Line, Tooltip } from "recharts";

type Props = {
  color:string;
  icon:string;
  title:string;
  datakey:number | string;
  percentage:number;
  ChartData:object[];
}

const ChartBox = (Props: Props) => {
    return (
        
        <div className="chartBox">

            <div className="boxInfo">
                <div className="title">
                    <img src={Props.icon} alt=""></img>
                    <span>{Props.title}</span>
                </div>
                <h1>{Props.number}</h1>
                <Link to="/" style={{color:Props.color}}>View all</Link>
            </div>
            <div className="chartInfo">
                <div className="chart">
                <ResponsiveContainer width="99%" height="100%">
                    
                    <LineChart data={Props.chartData}>  
                    <Tooltip
                    contentStyle={{background:"transparent", border:"none"}}
                    labelStyle={{display:"none"}}
                    position={{x:10, y:60}}
                    />
                    <Line type="monotone" dataKey={Props.dataKey} stroke={Props.color} strokeWidth={2}  dot={false}/>
                    </LineChart>
                </ResponsiveContainer>
                </div>
                <div className="texts">
                    <span className="percentage" style={{color: Props.percentage < 0 ? "tomato":"limegreen"}}>{Props.percentage}%</span>
                    <span className="duration">this month</span>
                </div>
            </div>
        </div>
    )
}

export default ChartBox