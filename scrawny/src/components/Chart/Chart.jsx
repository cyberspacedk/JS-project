import React, { Component } from "react";
import { Line } from "react-chartjs-3";
import "./chart.css";



class Chart extends Component {

    state = {
        dataHistory:[],
    }

    componentDidMount(){
        const dataHistory = JSON.parse(localStorage.getItem("hallOfFames"));
        this.setState({
            dataHistory: [...dataHistory]
        })
    }



  render() {
    const{dataHistory}=this.state;
    
    const getDateHisory = dataHistory.map(elem => elem.date);
    const getWeightHisory = dataHistory.map(elem => elem.weight);

    const data = {
      labels: [...getDateHisory],

      
      datasets: [
        {
          label: "How I became a human",
          data: [...getWeightHisory],
          fill: false,  
          borderColor: "green"  
        }
      ]
    };

    return (
      <div className="chart">
        <Line data={data} />
      </div>
    );
  }
}

export default Chart;
