import React from "react";
import { ResponsiveLine } from "@nivo/line";
import "./style.scss";


type ChartProps = {
    data:{
        id:string,
        color:string,
        data:{
            x:string,
            y:number
        }[]
    }[]
}

export default function Chart(props:ChartProps) {
    const {data} = props;
  return (
    <div className="wrapper-chart">
      <ResponsiveLine
        data={data}
        colors={(item)=>item.color}
        margin={{ top: 20, right: 40, bottom: 40, left: 40 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: false,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={null}
        pointSize={8}
        pointBorderWidth={8}
        pointLabelYOffset={-12}
        useMesh={true}
        enableGridY={false}
        enableSlices="x"
        animate={false}
      />
    </div>
  );
}
