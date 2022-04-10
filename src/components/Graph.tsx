import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Pdata from "../mock/Graph.json";
const Graph = () => {
  function useWindowDimensions() {
    const hasWindow = typeof window !== "undefined";
    function getWindowDimensions() {
      const width = hasWindow ? window.innerWidth : null;
      const height = hasWindow ? window.innerHeight : null;
      return {
        width,
        height,
      };
    }

    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );

    useEffect(() => {
      if (hasWindow) {
        function handleResize() {
          setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }
    }, [hasWindow]);

    return windowDimensions;
  }
  const { height, width } = useWindowDimensions();

  return (
    <>
      {/* Hello */}
      <AreaChart
        width={width || window.innerWidth}
        height={400}
        data={Pdata}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="months" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="student"
          stroke="#8884d8"
          fill="url(#colorUv)"
        />
      </AreaChart>
    </>
  );
};

export default Graph;
