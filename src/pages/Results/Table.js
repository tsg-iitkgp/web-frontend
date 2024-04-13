import { ResponsiveBar } from "@nivo/bar";

export default function Table(props) {
  const theme = {
    axis: {
      ticks: {
        text: {
          fill: "#ffffff",
        },
      },
      legend: {
        text: {
          fill: "#fff",
        },
      },
    },
  };

  return (
    <ResponsiveBar
      data={props.data}
      layout={props.layout}
      keys={props.keys}
      indexBy="HALL"
      margin={{ top: 50, right: 130, bottom: 150, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "category10" }}
      borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      axisTop={null}
      axisRight={null}
      theme={theme}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "hall",
        legendPosition: "middle",
        legendOffset: 35,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "points",
        legendPosition: "middle",
        legendOffset: -30,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: "color", modifiers: [["brighter", 5]] }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          itemTextColor: "#fff",
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
    />
  );
}
