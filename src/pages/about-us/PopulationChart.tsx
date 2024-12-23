import React, { useMemo } from "react";
import { AxisOptions, Chart } from "react-charts";

const BarChart = ({chartData,label}:{chartData:Array<{primary:string;secondary:number;fill:string;}>,label:string}) => {
  const data = useMemo(
    () => [
      {
        label: label,
        data: chartData,
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
        <h1 className=" text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] font-bold py-3 text-center">{label}</h1>
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

export default BarChart;
