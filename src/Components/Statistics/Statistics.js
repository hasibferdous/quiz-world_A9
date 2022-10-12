import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {
    Bar,
    BarChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
  } from "recharts";

const Statistics = () => {
    const loadedData = useLoaderData().data;
    const name = loadedData.name;
    const total = loadedData.total;

    return (
        <div>
            <h1 className="text-5xl w-auto mx-11 p-11 rounded-xl bg-black text-white">
                Statistics of Quiz Topics
            </h1>
        <div className="m-11 pt-11 pl-32 bg-slate-100 rounded-xl">
          <ResponsiveContainer width="80%" height={300}>
            <BarChart width={150} height={90} data={loadedData}>
              <XAxis dataKey="name" />
              <YAxis  />
              <Tooltip/>
              <Bar dataKey="total" fill="orange" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
};

export default Statistics;