import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './MyChart.css';

const MyChart = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ];
    return (
        <div className="chart-container">
      <div>
        <h2>Month VS Sell</h2>
        <LineChart width={400} height={500} data={data}>
          <Line dataKey={"sell"}></Line>
          <XAxis dataKey={"month"}></XAxis>
          <Tooltip></Tooltip>
          <YAxis dataKey={"sell"}></YAxis>
        </LineChart>
      </div>
      <div>
        <h2>Investment VS Revenue</h2>
        <BarChart width={400} height={520} data={data}>
          <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
          <XAxis dataKey={"month"}></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
          <Legend></Legend>

          <Bar dataKey={"investment"} stackId={"a"} fill={"#82ca9d"}></Bar>
          <Bar dataKey={"revenue"} stackId={"a"} fill={"#8884d8"}></Bar>
        </BarChart>
      </div>
    </div>
    );
};

export default MyChart;