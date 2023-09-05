import "./Home.scss";
import TopBox from "../../components/topBox/TopBox";
import ChartBOx from "../../components/topBox/chartBox/ChartBox";
import { chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from "../../data";

const Home = () =>{
    return(
        <div className="home">
            <div className="box box1"><TopBox/>
                
            </div>
            <div className="box box2"><ChartBOx {...chartBoxUser}/></div>
            <div className="box box3"><ChartBOx {...chartBoxProduct}/></div>
            <div className="box box4"><ChartBOx {...chartBoxRevenue}/></div>
            <div className="box box5"><ChartBOx {...chartBoxConversion}/></div>
            <div className="box box6">Box6</div>
            <div className="box box7">Box7</div>
            <div className="box box8">Box8</div>
            <div className="box box9">Box9</div>
          
        </div>
    )
}

export default Home