import React, { useMemo } from "react";
import { AxisOptions, Chart } from "react-charts";

const PopulationChart = () => {
  const data = useMemo(
    () => [
      {
        label: "Population",
        data: [
          { primary: "Male", secondary: 2440521,fill:'#ffff00' },
          { primary: "Female", secondary: 2441521,fill:'#f576f7' },
          { primary: "Total", secondary: 4282042,fill:'#00ff00' },
        ],
      },
    ],
    []
  );

  const primaryAxis = useMemo<
    AxisOptions<typeof data[number]["data"][number]>
  >(
    () => ({
      position: "bottom",
      getValue: (datum) => datum.primary,
    }),
    []
  );

  const secondaryAxes = useMemo<
    AxisOptions<typeof data[number]["data"][number]>[]
  >(
    () => [
      {
        position: "left",
        getValue: (datum) => datum.secondary,
        elementType: "bar",
        hardMin: 100000,
        hardMax: 5000000,
        tickCount: 5,
      },
    ],
    []
  );

  const getDatumStyle = React.useCallback(
    (datum) => ({
      fill: datum.originalDatum.fill,
    }),
    []
  );

  return (
    <div>
        <h1 className=" text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] font-bold py-3 text-center">Population</h1>
        <div className='h-[300px] lg:h-[400px] xl:h-[450px]'>
            <Chart
                options={{
                data,
                primaryAxis,
                secondaryAxes,
                getDatumStyle,
                    }}
            />
        </div>
    </div>
  );
};

export default PopulationChart;
