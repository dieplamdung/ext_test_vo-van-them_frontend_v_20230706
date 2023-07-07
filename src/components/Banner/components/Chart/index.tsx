import React from "react";
import { ResponsiveLine } from "@nivo/line";
import "./style.scss";

export default function Chart() {
  const data = [
    {
      id: "japan",
      color: "hsl(203, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 202,
        },
        {
          x: "helicopter",
          y: 25,
        },
        {
          x: "boat",
          y: 81,
        },
        {
          x: "train",
          y: 157,
        },
        {
          x: "subway",
          y: 179,
        },
        {
          x: "bus",
          y: 228,
        },
        {
          x: "car",
          y: 119,
        },
        {
          x: "moto",
          y: 67,
        },
        {
          x: "bicycle",
          y: 259,
        },
        {
          x: "horse",
          y: 262,
        },
        {
          x: "skateboard",
          y: 65,
        },
        {
          x: "others",
          y: 10,
        },
      ],
    },
    {
      id: "france",
      color: "hsl(334, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 102,
        },
        {
          x: "helicopter",
          y: 157,
        },
        {
          x: "boat",
          y: 7,
        },
        {
          x: "train",
          y: 199,
        },
        {
          x: "subway",
          y: 120,
        },
        {
          x: "bus",
          y: 287,
        },
        {
          x: "car",
          y: 213,
        },
        {
          x: "moto",
          y: 298,
        },
        {
          x: "bicycle",
          y: 8,
        },
        {
          x: "horse",
          y: 284,
        },
        {
          x: "skateboard",
          y: 43,
        },
        {
          x: "others",
          y: 232,
        },
      ],
    },
  ];
  return (
    <div className="wrapper-chart">
      <ResponsiveLine
        data={data}
        margin={{ top: 20, right: 40, bottom: 40, left: 40 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        //   legend: "transportation",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        // axisLeft={{
        //   tickSize: 5,
        //   tickPadding: 5,
        //   tickRotation: 0,
        // //   legend: "count",
        //   legendOffset: -40,
        //   legendPosition: "middle",
        // }}
        axisLeft={null}
        pointSize={2}
        // pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        // pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        // legends={[
        //   {
        //     anchor: "bottom-right",
        //     direction: "column",
        //     justify: false,
        //     translateX: 100,
        //     translateY: 0,
        //     itemsSpacing: 0,
        //     itemDirection: "left-to-right",
        //     itemWidth: 80,
        //     itemHeight: 20,
        //     itemOpacity: 0.75,
        //     symbolSize: 12,
        //     symbolShape: "circle",
        //     symbolBorderColor: "rgba(0, 0, 0, .5)",
        //     effects: [
        //       {
        //         on: "hover",
        //         style: {
        //           itemBackground: "rgba(0, 0, 0, .03)",
        //           itemOpacity: 1,
        //         },
        //       },
        //     ],
        //   },
        // ]}
        enableGridY={false}
      />
    </div>
  );
}
